import React, {useState, useEffect} from 'react';
import Choice from './elements/Choice';
import NumericInput from './elements/NumericInput';
function StepData(props) {

  const [heightValid, setHeightValid] = useState(false);
  const [weightValid, setWeightValid] = useState(false);
  const [myOpacity, setMyOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {setMyOpacity(1)}, 1);
  }, []);

  function handleSexClick(sex){
    let newsex = props.getFormField("sex") === sex ? null : sex
    props.setFormField("sex", newsex);
  }
  function handleAgeClick(age){
    let newage = props.getFormField("age") === age ? null : age
    props.setFormField("age", newage);
  }


  function amValid(){
    return (
      heightValid && weightValid &&
      props.getFormField("age") && props.getFormField("age").length > 0 &&
      props.getFormField("sex") && props.getFormField("sex").length > 0
    );
  }

  function handleNextClick(){
    if(amValid()){
      props.setCurrentStep(props.nextStep);
    }
  }

  const inFun = {setter: props.setFormField, getter: props.getFormField, submitter: handleNextClick}

  return (
    <div className="step-container step-choice" style={{opacity: myOpacity}}>
      <h1 className="title">{props.title}</h1>
      <div className="text">{props.text}</div>
      <hr />
      <div className="progress">{props.progress}</div>

      <div className="elements-inliner">
        <Choice index="a" value="male" label="Male" setter={handleSexClick} active={props.getFormField("sex") === "male"} />
        <Choice value="female" label="Female" setter={handleSexClick} active={props.getFormField("sex") === "female"} />
        <Choice value="other" label="Other" setter={handleSexClick} active={props.getFormField("sex") === "other"} />
      </div>

      <div className="elements-inliner">
        <Choice index="b" value="20s" label="In my 20s" setter={handleAgeClick} active={props.getFormField("age") === "20s"} classes="age-selector" />
        <Choice value="30s" label="30s" setter={handleAgeClick} active={props.getFormField("age") === "30s"} classes="age-selector" />
        <Choice value="40s" label="40s" setter={handleAgeClick} active={props.getFormField("age") === "40s"} classes="age-selector" />
        <Choice value="50s" label="50s" setter={handleAgeClick} active={props.getFormField("age") === "50s"} classes="age-selector" />
        <Choice value="60s" label="60s" setter={handleAgeClick} active={props.getFormField("age") === "60s"} classes="age-selector" />
        <Choice value="70+" label="70+" setter={handleAgeClick} active={props.getFormField("age") === "70+"} classes="age-selector" />
      </div>

      <div className="elements-inliner">
        <NumericInput validSetter={setHeightValid} text="Height:" index="c" {...inFun} inputs={
            [
              {name: "heightFt", min: 1, max: 9, maxLength: 1, unit: "ft"},
              {name: "heightIn", min: 0, max: 12, maxLength: 2, unit: "in"}
            ]
          }
          />
      </div>

      <NumericInput validSetter={setWeightValid} text="Current weight:" index="d" {...inFun} inputs={
          [
            {name: "weight", min: 1, max: 999, maxLength: 3, unit: "lbs"}
          ]
        }
        />

      <div className="navigator">
        <button className={"btn alternative"} onClick={props.backOneStep}>BACK</button>
        <button className={"btn " + (amValid() ? "" : "disabled")} onClick={ handleNextClick }>{props.nextText || "NEXT"}</button>
      </div>
      <div className="privacy-container">
        <div className="privacy-questionmark">?</div>
        <div className="privacy-disclaimer" style={{textAlign: "left"}}>
          Plantable note: <br />
          This information helps us build a custom solution for you. <br />
          We take your privacy very seriously and this information will never be shared.
        </div>
      </div>
    </div>
  )
}
export default props => <StepData {...props} />;
