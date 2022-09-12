import React from 'react';
function TextInput(props) {

  function handleChange(e){
    props.setter(props.name, e.target.value);
  }

  function getClassName(){
    let res = (props.amValid() ? "phat-input-container valid" : "phat-input-container");
    if(props.classes){
      res += " " + props.classes;
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

  return (
    <div className={getClassName()} style={props.style}>
      { getIndex() }
      <input
        value={props.getter(props.name)}
        placeholder={props.placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyPressed}
        />
    </div>
  )

}
export default props => <TextInput {...props} />;
