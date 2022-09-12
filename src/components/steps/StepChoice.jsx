import React, {useState, useEffect} from 'react';
import Choice from './elements/Choice';
import useEventListener from '@use-it/event-listener';
function StepChoice(props) {

  var valuesMap = {};
  const [myOpacity, setMyOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {setMyOpacity(1)}, 1);
  }, []);

  useEventListener('keydown', (e) => {
    if(e.keyCode === 13){
      handleNextClick();
    } else if(e.key) {
      if(valuesMap[e.key]){
        handleChoiceClick(valuesMap[e.key]);
      }
    }
  });

  function getMyValue(){
    return props.getFormField(props.fieldName);
  }

  function setMyValue(value){
    props.setFormField(props.fieldName, value);
  }

  function handleNextClick(){
    if(getMyValue()){
      for(var x of props.options){
        if(x.nextStep && x.value === getMyValue()){
          props.setCurrentStep(x.nextStep);
          return true;
        }
      }
      props.setCurrentStep(props.nextStep);
    }
  }

  function handleChoiceClick(value){
    if(getMyValue() === value){
      // If clicking already selected deselect
      setMyValue(null);
    } else {
      setMyValue(value);
    }
  }

  function getChoices(){
    var c = -1;
    return props.options.map((x) => {
      c++;
      let index = String.fromCharCode(97+c);
      valuesMap[index] = x["value"];
      return <Choice key={c} index={index} {...x} setter={handleChoiceClick} active={getMyValue() === x["value"]} />
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
        <button className={"btn " + (getMyValue() ? "" : "disabled")} onClick={ handleNextClick }>{props.nextText || "NEXT"}</button>
      </div>
    </div>
  )
}
export default props => <StepChoice {...props} />;
