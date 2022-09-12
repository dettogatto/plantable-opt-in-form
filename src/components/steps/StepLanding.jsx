import React, { useState } from 'react';
import TextInput from './elements/TextInput';
import {useSpring, animated} from 'react-spring';
import axios from 'axios';

function StepLanding(props) {

  const [showingForm, setShowingForm] = useState(false);
  const [goingNext, setGoingNext] = useState(false);
  const gf = props.getFormField;

  const spring = useSpring({
    config: {mass: 1, tension: 300, friction: 40},
    transform: showingForm ? 'scale(1)' : 'scale(0.3)'
  })

  const nextSpring = useSpring({
    config: {mass: 1, tension: 800, friction: 100},
    minHeight: goingNext ? "100vh" : "0vh",
    minWidth: goingNext ? "100%" : "60%",
    onRest: goNext
  });

  function handleNextClick(){
    if(isFirstNameValid() && isLastNameValid() && isEmailValid()){
      sendData();
      setGoingNext(true);
    }
  }

  function goNext(){
    if(goingNext){
      props.setCurrentStep(props.nextStep);
    }
  }

  function inputSubmit(){
    handleNextClick();
  }

  function sendData(){
    let url = "./php/ac/";
    let data = {
      contact: {
        email: props.getFormField("email"),
        firstName: props.getFormField("firstName"),
        lastName: props.getFormField("lastName")
      },
      tags: [22],
      fields: {
        14: gf("UTMsource"),
        15: gf("UTMmedium"),
        16: gf("UTMcampaign"),
        17: gf("UTMcontent"),
        18: gf("UTMadset")
      }
    }
    axios.post(url, data);
  }

  function isFirstNameValid(){ return props.getFormField("firstName") && props.getFormField("firstName").length > 0 }
  function isLastNameValid(){ return props.getFormField("lastName") && props.getFormField("lastName").length > 0 }
  function isEmailValid(){ return props.getFormField("email") && props.getFormField("email").match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) }
  function amValid(){ return isFirstNameValid() && isLastNameValid() && isEmailValid() }

  const inFun = {setter: props.setFormField, getter: props.getFormField, submitter: inputSubmit}

  function getProva2(){
    return (
      <animated.div className="landing-form-animator" style={{...spring, ...nextSpring}} >
        <div className="landing-form" style={{opacity: goingNext ? 0 : 1}} >
          <h1 className="title">Let's get started</h1>
          <TextInput placeholder="First Name" name="firstName" amValid={isFirstNameValid} classes="simple" {...inFun} />
          <TextInput placeholder="Last Name" name="lastName" amValid={isLastNameValid} classes="simple" {...inFun} />
          <TextInput placeholder="Email" name="email" amValid={isEmailValid} classes="simple" {...inFun} />
          <div className="navigator" style={{marginTop: 0}}>
            <button className={"btn " + (amValid() ? "" : "disabled")} onClick={handleNextClick} style={{marginTop: 20}}>{props.nextText || "NEXT"}</button>
          </div>
          <div className="privacy-container">
            <div className="privacy-disclaimer">
              We take privacy very seriously.
              <br />
              We will never share your email address with anyone.
            </div>
          </div>
        </div>
        <div className="popup-exit" onClick={() => setShowingForm(false)} style={{opacity: goingNext ? 0 : 1}}></div>
      </animated.div>
    )
  }

  function getProva1(){
    return (
      <div style={{opacity: (showingForm ? 0 : 1)}} className="landing-content">
        <h1 className="title">Discover what a plant-based diet can do for you.</h1>
        <hr className="mini" />
        <div className="progress">Take our short quiz to unlock a personalized dietary program and see the results you can expect.</div>
        <button className="btn" onClick={() => setShowingForm(true)} style={{marginTop: 20}}>begin</button>
      </div>
    )
  }

  return (
    <div className="landing-container">
      { getProva1() }
      { showingForm && getProva2() }
    </div>
  )
}
export default props => <StepLanding {...props} />;
