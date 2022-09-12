import React, {useState, useEffect} from 'react';
import Choice from './elements/Choice';
import useEventListener from '@use-it/event-listener';
function StepChoice(props) {

  var valuesMap = {};
  const [myOpacity, setMyOpacity] = useState(0);

  useEventListener('keydown', (e) => {
    if(e.keyCode === 13){
      handleNextClick();
    } else if(e.key) {
      if(valuesMap[e.key]){
        handleChoiceClick(valuesMap[e.key]);
      }
    }
  });

  useEffect(() => {
    setTimeout(() => {setMyOpacity(1)}, 1);
  }, []);

  function getMyValue(){
    return props.getFormField(props.fieldName) || [];
  }

  function setMyValue(value){
    props.setFormField(props.fieldName, value);
  }

  function canGoNext(){
    let tmp = getMyValue().length;
    return ((!props.maxChoices || tmp <= props.maxChoices) && (!props.minChoices || tmp >= props.minChoices));
  }

  function handleNextClick(){
    if(canGoNext()){
      props.setCurrentStep(props.nextStep);
    }
  }

  function handleChoiceClick(value){
    var tmp = getMyValue();
    if(tmp && tmp.includes(value)){
      // If clicking already selected deselect
      setMyValue(tmp.filter(v => v !== value));
    } else {
      if(!tmp){
        tmp = [value]
      } else {
        tmp.push(value);
      }
      setMyValue(tmp);
    }
  }

  function getChoices(){
    var c = -1;
    return props.options.map((x) => {
      c++;
      let index = String.fromCharCode(97+c);
      valuesMap[index] = x["value"];
      return <Choice key={c} index={index} {...x} setter={handleChoiceClick} active={getMyValue().includes(x["value"])} />
    });
  }

  return (
    <div className="step-container step-choice" style={{opacity: myOpacity}}>
      <h1 className="title">{props.title}</h1>
      <div className="text">{props.text}</div>
      <hr />
      <div className="progress">{props.progress}</div>
      { getChoices() }
      <div className="navigator">
        <button className={"btn alternative"} onClick={props.backOneStep}>BACK</button>
        <button className={"btn " + (canGoNext()  ? "" : "disabled")} onClick={ handleNextClick }>{props.nextText || "NEXT"}</button>
      </div>
    </div>
  )
}
export default props => <StepChoice {...props} />;
