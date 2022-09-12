import React, {useState, useRef, createRef} from 'react';
function NumericInput(props) {

  const inputsRef = useRef([...Array(props.inputs.length)].map(() => createRef()));
  const [focused, setFocused] = useState([...Array(props.inputs.length)].map(() => false))

  function handleParentClick(e){
    var element = null;
    for(let r of inputsRef.current){
      element = r.current;
      if(r.current.value.length < 1){
        break;
      }
    }
    element.focus();
    element.selectionStart = element.value.length;
    element.selectionEnd = element.value.length;
  }

  function amValid(){
    let res = props.inputs.every((inp) => {
      return (props.getter(inp.name) || props.getter(inp.name) === 0) &&
      (!inp.min || inp.min <= props.getter(inp.name)) &&
      (!inp.max || inp.max >= props.getter(inp.name))
    });
    props.validSetter(res);
    return res;
  }

  function getClassName(){
    let res = "numeric-input-container numeric";
    amValid() && (res += " valid");
    if(focused.some((x) => {
      return x;
    })){
      res += " focus";
    }
    return res;
  }

  function handleKeyPressed(e){
    if(e.keyCode === 13 && props.submitter){
      props.submitter();
    }
  }

  function getIndex(){
    if(!props.index){ return null; }
    return (
      <div className="letter-container">
        <div>{props.index}</div>
      </div>
    )
  }

  function onInputChange(name, value, min = null, max = null, float = null){
    var val = value;
    if(float){
      val = val.replace(",", ".").replace(/[^0-9.]/gi, "");
      val = val.replace(/\./,"#").replace(/\./g,"").replace(/#/,"."); // leave just first dot
    } else {
      val = val.replace(/[^0-9]/gi, "");
    }
    if(val === ""){
      props.setter(name, "");
      return false;
    }
    val = parseFloat(val);
    props.setter(name, val);
  }

  function onFocus(e){
    var c = e.target.getAttribute("data-index");
    setFocused((prev) => {
      prev[c] = true;
      return [...prev];
    });
  }
  function onBlur(e){
    var c = e.target.getAttribute("data-index");
    setFocused((prev) => {
      prev[c] = false;
      return [...prev];
    });
  }

  function getInputs(){
    var result = [];
    var c = 0;
    props.inputs.forEach((inp) => {
      result.push(
        <input
          key={"input" + c}
          ref={inputsRef.current[c]}
          onFocus={onFocus}
          onBlur={onBlur}
          size={inp.size || 4}
          maxLength={inp.maxLength}
          value={props.getter(inp.name)}
          placeholder={inp.placeholder || '...'}
          onKeyDown={handleKeyPressed}
          onChange={(e) => onInputChange(inp.name, e.target.value, inp.min, inp.max, inp.float)}
          onClick={(e) => e.stopPropagation()}
          data-index={c}
          />
      );
      result.push(
        <span key={"unit" + c}>{inp.unit}</span>
      );
      c++;
    });
    return result;
  }

  return (
    <div className={getClassName()} style={props.style} onClick={handleParentClick}>
      { getIndex() }
      <span>{props.text}</span>
      { getInputs() }
    </div>
  )

}
export default NumericInput;
