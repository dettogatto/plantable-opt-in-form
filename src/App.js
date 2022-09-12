import React, { useState, useEffect } from 'react';
import StepLanding from './components/steps/StepLanding';
import StepChoice from './components/steps/StepChoice';
import StepMultiChoice from './components/steps/StepMultiChoice';
import StepData from './components/steps/StepData';
import StepLoading from './components/steps/StepLoading';
import StepOutput from './components/steps/StepOutput';
import * as Constants from './Data';
import TagManager from 'react-gtm-module';
import './App.scss';
TagManager.initialize({ gtmId: 'GTM-YOURID' });

const ComponentMap = {
  landing: StepLanding,
  loading: StepLoading,
  choice: StepChoice,
  multi: StepMultiChoice,
  data: StepData,
  output: StepOutput
}

var startingStep = Constants.startingStep;
const lsData = localStorage.getItem("gattoFormPlantable") ? JSON.parse(localStorage.getItem("gattoFormPlantable")) : false;
var theFormData = lsData && lsData["formData"] ? lsData["formData"] : {};
var theUserPath = lsData && lsData["userPath"] ? lsData["userPath"] : [startingStep];

var url = new URL(window.location.href);
var o = url.searchParams.get("o");

if(o){
  o = o.split("");
  if(o.length === 6){
    theFormData = {outputData: o.map((i) => (i.charCodeAt(0) - 98))};
    theUserPath = ["stepOutput"];
  }
}

["source", "medium", "campaign", "content", "adset"].forEach((x) => {
  let tmp = url.searchParams.get("utm_" + x);
  if(x && tmp && x.length > 0 && tmp.length > 0){
    theFormData["UTM"+x] = tmp;
  }
});


function App() {

  const [formData, setFormData] = useState(theFormData);
  const [showDebug, setShowDebug] = useState(true);
  const [userPath, setUserPath] = useState(theUserPath);

  // Save to localStorage
  useEffect(() => {
    window.localStorage.setItem("gattoFormPlantable", JSON.stringify({
      formData: formData,
      userPath: userPath
    }));
  }, [formData, userPath]);

  // Scroll to top
  useEffect(() => {
    let curr = userPath[userPath.length - 1];
    window.scrollTo(0, 0); // Scroll to top after page change
    window.history.replaceState({page: curr}, "", "?p=" + curr); // change history
  }, [userPath]);

  function setFormField(name, value){
    setFormData( (pr) => {
      let tmp = {};
      tmp[name] = value;
      let result = {...pr, ...tmp, outputData: getOutputData()}
      Object.keys(result).forEach((key) => (result[key] === null) && delete result[key]);
      console.log("New data:");
      console.log(result);
      return result;
    });
  }

  function getCurrentStep(){
    return userPath[userPath.length - 1];
  }

  function getFormField(name){
    return (typeof(formData[name]) !== "undefined" && formData[name] !== null) ? formData[name] : "";
  }

  function changeStep(newStep){
    setUserPath((prev) => [...prev, newStep]);
  }

  function backOneStep(){
    var upa = [...userPath];
    upa.pop();
    setUserPath(upa);
  }

  function countHabits(){
    return getFormField("surveyHabits").length;
  }

  function getIndexOfVal(field){
    let values = Constants.blueprint[field]["options"].map((i) => i["value"]);
    return values.indexOf(getFormField(field));
  }

  function getPlan(){
    if(getIndexOfVal("surveyGoal") === 1){
      return ((countHabits() <= 2 && getFormField("surveyWeightLossGoal") === "0-5") ? 0 : 1);
    }
    if(getIndexOfVal("surveyGoal") === 3){
      return 1;
    }
    return countHabits() <= 2 ? 0 : 1;
  }

  function getOutputData(){
    return [
      countHabits(),
      getIndexOfVal("surveyGoal"),
      getIndexOfVal("surveyMedicalIssue"),
      getIndexOfVal("surveyCurrentDiet"),
      getIndexOfVal("surveyPhysicalActivity"),
      getPlan()
    ]
  }


  function getStepComponent(){
    if(Constants.blueprint[getCurrentStep()]){
      return React.createElement(ComponentMap[Constants.blueprint[getCurrentStep()]["type"]], {
        key: getCurrentStep(),
        ...Constants.blueprint[getCurrentStep()],
        currentStep: getCurrentStep(),
        setCurrentStep: changeStep,
        backOneStep: backOneStep,
        setFormField: setFormField,
        getFormField: getFormField
      });
    }
    return null;
  }


  return (
    <div className="app">
      { getStepComponent() }
      { false && <pre className="debugger" style={{display: (showDebug ? "block" : "none")}} onClick={() => setShowDebug(false)}>
      {JSON.stringify(formData)}
    </pre>}
    {false && <div style={{position: "absolute", top: 0, left: 0, padding: 10, backgroundColor: "#ff0"}} onClick={()=>{setUserPath([startingStep]);setFormData({})}}>
    x
  </div>}
</div>
);
}

export default App;

//IDEA Preload images (like loading bg)
