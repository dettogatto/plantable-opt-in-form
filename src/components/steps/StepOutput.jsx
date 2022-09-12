import React, { useEffect, useRef, useState } from 'react';
import ReviewsSlideshow from '../ReviewsSlideshow';
import {useSpring} from 'react-spring';
import * as Constants from '../../Data';
import { ReactComponent as Logo } from '../../images/logo.svg';

function StepOutput(props) {

  const phoneScreen = useRef(null);
  const refGetStarted = useRef(null);
  const refTheProgram = useRef(null);
  const refPlanFrame = useRef(null);
  const [planFrameHeight, setPlanFrameHeight] = useState(300);
  const [, setY] = useSpring(() => ({ y: 0 }));
  const outData = props.getFormField("outputData");

  let isStopped = false;
  function onWheel(){
    isStopped = true;
    window.removeEventListener('wheel', onWheel);
  }


  function scrollTo(daElement){
    const element = daElement.current;
    const value = window.scrollY + element.getBoundingClientRect().top;

    window.addEventListener('wheel', onWheel);

    setY({
      y: value,
      reset: true,
      from: { y: window.scrollY },
      onRest: () => {
        isStopped = false;
        window.removeEventListener('wheel', onWheel);
      },
      onFrame: props => {
        if (!isStopped) {
          window.scroll(0, props.y);
        }
      }
    })
  }

  // Resize Plan iFrame
  useEffect(() => {
    window.addEventListener('message', receiveMessage);
    return(() => { window.removeEventListener('message', receiveMessage) });
  });

  function receiveMessage(evt){
      // console.log("got message: "+evt.data);
      setPlanFrameHeight(parseInt(evt.data));
  }

  useEffect(() => {
    onWindowResize();
    setInterval(onWindowResize, 500);
    window.addEventListener('resize', onWindowResize);
    return(() => { window.removeEventListener('resize', onWindowResize) });
  }, []);

  function onWindowResize(){
    if(phoneScreen.current){
      let height = phoneScreen.current.getBoundingClientRect().height;
      let px = Math.min(height/37, 18);
      phoneScreen.current.style.fontSize = Math.floor(px) + "px";
    }
  }

  function restartSurvey(){
    localStorage.removeItem("gattoFormPlantable");
    window.location = ".";
  }

  function countHabits(){
    return outData[0];
  }

  function getSegment(){
    return outData[1];
  }

  function getMedicalIssue(){
    return outData[2];
  }

  function getCurrentDiet(){
    return outData[3];
  }

  function getPhysicalActivity(){
    return outData[4];
  }

  function getPlan(){
    return outData[5];
  }

  function printSummary(){
    let habits = countHabits() <= 2 ? 0 : 1;
    return Constants.results.summary[getCurrentDiet()][habits];
  }

  function printFraseVariabile(){
    if(getSegment() === 3){
      return Constants.results.fraseVariabile[3][getMedicalIssue()];
    }
    return Constants.results.fraseVariabile[getSegment()];
  }

  function printTitleCol2(){
    if(getSegment() === 3){
      return Constants.results.titleColumn2[3][getMedicalIssue()];
    }
    return Constants.results.titleColumn2[getSegment()];
  }

  function printCol2(){
    if(getSegment() === 2){
      return Constants.results.column2[2][Math.floor(getPhysicalActivity() / 2)];
    }
    if(getSegment() === 3){
      return Constants.results.column2[3][getMedicalIssue()];
    }
    return Constants.results.column2[getSegment()];
  }

  function printCol3(){
    if( getSegment() === 3 ){
      return Constants.results.column3["medical"][getMedicalIssue()][getCurrentDiet()];
    }
    return Constants.results.column3[getCurrentDiet()];
  }

  function printResults(){
    if(getSegment() === 1){
      return Constants.results.results[1][getPlan()];
    }
    if(getSegment() === 3){
      return Constants.results.results[3][getMedicalIssue()];
    }
    return Constants.results.results[getSegment()][getPlan()];
  }

  function printPlan(){
    return ["Quickstart", "Reboot"][getPlan()];
  }

  function getIframeUrl(){
    return ["https://plantable.com/products/qs", "https://plantable.com/products/rb"][getPlan()];
  }

  function printRecap(){
    return Constants.results.recap[getSegment()][getPlan()];
  }

  function goToShop(){
    if(getPlan() === 0){
      window.location = "https://plantable.com/products/quickstart";
    } else {
      window.location = "https://plantable.com/products/reboot";
    }
  }

  return (
    <div className="output-container">

      <div className="two-columns boxed yellow-on-mobile">
        <div className="title">
          {printSummary()}
        </div>
        <div>
          <p>
            A whole food, plant-based diet (WFPB) is the foundation of a
            healthy lifestyle, optimizing well-being and increasing
            energy. It’s so powerful that it can even reverse
            and prevent chronic disease.
          </p>
          <p>
            At Plantable, our mission is to bring people effortlessly into
            this way of life, so that all may experience the joy that comes
            from feeling so well.
          </p>
        </div>
      </div>

      <hr className="desktop" />

      <p>{ printFraseVariabile() }</p>

      <div className="four-columns boxed">
        <div>
          <div className="index">01</div>
          { Constants.results.titleColumn1[getSegment()] }
          <p className="small">
            { Constants.results.column1[getSegment()] }
          </p>
        </div>
        <div>
          <div className="index">02</div>
          { printTitleCol2() }
          <p className="small">
            { printCol2() }
          </p>
        </div>
        <div>
          <div className="index">03</div>
          { Constants.results.titleColumn3[getSegment()] }
          <p className="small">
            { printCol3() }
          </p>
        </div>
        <div>
          <div className="index">04</div>
          { Constants.results.titleColumn4[getSegment()] }
          <p className="small">
            { Constants.results.column4[countHabits() <= 2 ? 0 : 1] }
          </p>
        </div>
      </div>


      <div className="sghignazza">
        <div className="overlay"></div>
        <div className="boxed">
          <h1>Here are the results you can expect in { getPlan() === 0 ? 7 : 28 } days:</h1>
          { printResults() }
          <div className="btn" onClick={() => {scrollTo(refTheProgram)}}>Learn How</div>
        </div>
      </div>


      <div className="the-program" ref={refTheProgram}>
        <h1>
          Plantable makes it easy with the right program for you.
        </h1>

        <div className="two-columns boxed">
          <div className="phone-container">
            <div className="phone">
              <img className="desktop" src={require("../../images/iphone.png")} alt="" />
              <img className="mobile" src={require("../../images/iphone-freccia.png")} alt="" />
              <div className="screen" ref={phoneScreen}>
                <div className="title">
                  { printPlan() }
                </div>
                <div className="price">
                  { getPlan() === 0 ? "$225" : "$175 per week, for four weeks" }
                </div>
                <hr />
                <p style={{fontWeight: "bold"}}>
                  {
                    getPlan() === 0 ?
                    "Our fast, one week reset to feel better and lighter."
                    :
                    <span>Our signature program to transform your well-being and reset your habits.<br />For good.</span>
                  }
                </p>
                <hr />
                {
                  getPlan() === 0 ?
                  <ul>
                    <li>12 delicious, chef-prepared meals</li>
                    <li>Daily education and 7 days of one-on-one support from your personal coach</li>
                    <li>Learn the basics of a whole food, plant-based lifestyle</li>
                    <li>Unlock post-Quickstart discounted pricing and ability to customize</li>
                  </ul>
                  :
                  <ul>
                    <li>Four weeks of 12 delicious, chef-prepared meals</li>
                    <li>Achieve your goals with unlimited one-on-one support from your personal coach and daily education curriculum</li>
                    <li>Skip a shipment at any time</li>
                    <li>Tools to continue the Plantable lifestyle</li>
                    <li>Unlock post-Reboot discounted pricing and ability to customize</li>
                  </ul>
                }
              </div>
            </div>
          </div>
          <div className="text">
            <h2>Why the { printPlan() } is perfect for you</h2>
            { printRecap() }
            <div><div className="btn" onClick={goToShop}>Start now</div></div>
          </div>
        </div>


      </div>


      <div className="dish-container">

        <div className="dish two-columns boxed">
          <div>
            <h1>Why Plantable works.</h1>
            <hr className="mini" />
            <p>
              Plantable brings amazing results because it combines the power
              of a personalized coaching platform with delicious, nutrient-dense,
              plant-based meals, fully prepared and delivered to you, for your convenience.
            </p>
            <div className="btn" onClick={() => {scrollTo(refGetStarted)}}>Start now</div>
            <div className="image-mobile">
              <img src={require("../../images/output-dish.png")} alt="" />
            </div>
          </div>
        </div>

        <div className="image-desktop"></div>

      </div>

      <div className="two-columns boxed alien">
        <div>
          <center>
            <img src={require("../../images/output-alien.jpg")} alt="" />
          </center>
        </div>
        <div>
          <h1>Education and support from your personal coach.</h1>
          <hr className="mini" />
          <p>
            Create new long-term habits with daily education, guidance and support from
            your own personal coach, anytime and anywhere.
          </p>
        </div>
      </div>

      <div className="box-container">
        <div className="two-columns boxed">
          <div>
            <h1>Leave the heavy lifting in the kitchen to us!</h1>
            <hr className="mini" />
            <p>
              Leave the planning, shopping, chopping and cooking to us.
            </p>
            <p>
              Our meals are purposefully designed to be balanced across the macro-nutrients, delicious and filling.
            </p>
            <p>
              We make it easy so that you can focus on you!
            </p>
            <div className="btn" onClick={() => {scrollTo(refGetStarted)}}>Start now</div>
          </div>
          <div>
            <img src={require("../../images/output-box.png")} alt="" />
          </div>
        </div>
      </div>

      <div className="icons-container">
        <h1>How it works.</h1>
        <div className="icons">
          <div>
            <img src={require("../../images/output-icon-1.png")} alt="" />
            <p>1.</p>
            <p>Pick your ship date</p>
          </div>
          <div>
            <img src={require("../../images/output-icon-2.png")} alt="" />
            <p>2.</p>
            <p>Connect with your coach</p>
          </div>
          <div>
            <img src={require("../../images/output-icon-3.png")} alt="" />
            <p>3.</p>
            <p>Receive your meals and get started</p>
          </div>
        </div>
      </div>


      <div className="two-columns faces-container boxed">
        <div className="faces">
          <div className="face">
            <img src={require("../../images/face-nadja.jpg")} alt="" />
            Dr. Nadja Pinnavaia
          </div>
          <div className="face">
            <img src={require("../../images/face-christen.jpg")} alt="" />
            Christen Dinger
            <span>Chief Customer Officer</span>
          </div>
          <hr className="mobile" />
          <div className="face">
            <img src={require("../../images/face-hooman.jpg")} alt="" />
            Dr. Hooman Yaghoobzadeh
            <span>Medical Advisor</span>
          </div>
          <hr className="desktop" />
          <div className="face">
            <img src={require("../../images/face-nikki.jpg")} alt="" />
            Nikki King Bennett
            <span>Executive Chef</span>
          </div>
          <hr className="mobile" />
          <div className="face">
            <img src={require("../../images/face-rachel.jpg")} alt="" />
            Rachel Hazen
            <span>Chef De Cuisine</span>
          </div>
          <div className="face">
            <img src={require("../../images/face-amanda.jpg")} alt="" />
            Amanda Bontempoh
            <span>Chief Nutrition Advisor</span>
          </div>
        </div>
        <div className="text">
          <h1>
            Meet the experts behind Plantable.
          </h1>
          <hr className="mini" />
          <p>
            Plantable is based upon science. The science that a real food, whole food,
            plant-based diet is optimal for health, while recognizing that change is hard.
            Plantable brings together medicine, nutrition, behavioral psychology with
            award-winning chefs for the best results!
          </p>
        </div>
      </div>

      <div className="community">
        <span>Transform your life. For good.</span>
        <h1>Reviews from the Plantable community.</h1>
        <ReviewsSlideshow />
      </div>

      <div className="get-started" ref={refGetStarted}>
        <span className="mono-plan">{printPlan()}</span>
        <div className="all-stars"></div>
        <h1>Choose your ship date</h1>
        <p>Depending on your location your box will arrive 1 or 2 days after the selected ship date.</p>

        <iframe scrolling="no" height={planFrameHeight} ref={refPlanFrame} src={getIframeUrl()} className="plan-frame" />

        <div className="btn" style={{margin: "90px auto 0px auto"}} onClick={restartSurvey}>Retake the survey</div>

      </div>

      <div className="footer">
        <div className="boxed" style={{textAlign: "center"}}>
          <Logo />
          <div className="privacy">
            <a href="https://plantable.com/pages/terms-conditions" target="_blank" rel="noopener noreferrer">
              TERMS & CONDITIONS
            </a>
            <br />
            <a href="https://plantable.com/pages/privacy-policy" target="_blank" rel="noopener noreferrer">
              PRIVACY POLICY
            </a>
          </div>
          <div className="copyright">©2019 PLANTABLE INC. (FORMERLY EUPHEBE INC.)</div>
        </div>
      </div>

    </div>
  )
}
export default props => <StepOutput {...props} />;
