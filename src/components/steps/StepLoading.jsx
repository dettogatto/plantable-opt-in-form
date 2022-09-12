import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StepLoading(props) {

  const gf = props.getFormField;
  const [loaded, setLoaded] = useState(false);
  const [phrase, setPhrase] = useState("We are evaluating how a plant-based diet can help you reach your goals.");
  var dotsTimer = null;

  useEffect(() => {
    if(props.getFormField("email") === "test@mirai.bay"){
      setPhrase("Happy debugging!");
      setTimeout(() => {props.setCurrentStep(props.nextStep)}, 3000);
    } else {
      sendData();
    }
  }, []);

  const [dots, setDots] = useState("");
  useEffect(() => {
    dotsTimer = setTimeout(() => {
      setDots((prev) => (prev.length > 2 ? "" : prev + "."));
    }, 300)
    return(() => clearTimeout(dotsTimer));
  }, [dots]);

  function sendData(){
    let url = "./php/ac/";
    let data = {
      contact: {
        email: props.getFormField("email"),
        firstName: props.getFormField("firstName"),
        lastName: props.getFormField("lastName")
      },
      lists: [13],
      tags: [21],
      fields: {
        3: gf("sex"),
        4: gf("age"),
        5: gf("weight"),
        6: gf("surveyGoal"),
        7: gf("surveyMedicalIssue"),
        8: gf("surveyCurrentDiet"),
        9: gf("surveyHabits"),
        10: gf("surveyMealsOut"),
        11: (gf("outputData").map((i) => String.fromCharCode(i+98))).join(""),
        12: ["Quickstart", "Reboot"][parseInt(props.getFormField("outputData")[5])]
      }
    }
    axios.post(url, data)
    .then((result) => {
      setLoaded(true);
      setPhrase("Your results are ready!");
      setTimeout(() => {props.setCurrentStep(props.nextStep)}, 900);
    })
    .catch((error) => {
      setPhrase("Something went wrong... Please try reloading this page!");
      setLoaded(false);
    });
  }


  return (
    <div className="loading-container">
      <div className="title">
        Hang tight
        {!loaded && <span className="loading-dots">{dots}</span>}
      </div>
      <p>
        Thank you, {props.getFormField("firstName")}.
      </p>
      <p>
        { phrase }
      </p>
    </div>
  )
}
export default props => <StepLoading {...props} />;

// <span className="loading-dots-stabilizer">{ ".".repeat(3 - dots.length) }</span>
