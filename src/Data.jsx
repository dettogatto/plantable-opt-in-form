import React from 'react';

export const startingStep = "landingPage";

export const blueprint = {
  landingPage: {
    type: "landing",
    nextStep: "userData"
  },
  userData: {
    type: "data",
    nextStep: "surveyGoal",
    prevStep: "landingPage",
    title: "Your information",
    progress: "Step 1/6"
  },
  surveyGoal: {
    type: "choice",
    fieldName: "surveyGoal",
    title: "What is your goal from a plant based diet?",
    text: "Please choose the one that most closely matches your goal",
    progress: "Step 2/6",
    options: [
      {label: "Improvement in well-being", value: "improvement-in-well-being", nextStep: "surveyFeel"},
      {label: "Weight loss", value: "weight-loss", nextStep: "surveyWeightLossGoal"},
      {label: "Improve athletic performance", value: "improve-athletic-performance", nextStep: "surveyPhysicalActivity"},
      {label: "Address a particular medical issue", sublabel: "(e.g. high blood sugar, elevated cholesterol, autoimmune disorder, etc)", value: "address-medical-issue", nextStep: "surveyMedicalIssue"},
      {label: "Ease and convenience of healthy meals", value: "ease-and-convenience", nextStep: "surveyCurrentDiet"},
    ]
  },
  surveyFeel: {
    type: "multi",
    fieldName: "surveyFeel",
    nextStep: "surveyCurrentDiet",
    title: "How do you currently feel?",
    text: "Mark all that apply",
    progress: "Step 3/6",
    options: [
      {label: "Sluggish and tired", value: "sluggish"},
      {label: "Stressed", value: "stressed"},
      {label: "Heavy and bloated", value: "heavy"},
      {label: "Foggy and mentally distracted", value: "foggy"}
    ]
  },
  surveyCurrentDiet: {
    type: "choice",
    fieldName: "surveyCurrentDiet",
    nextStep: "surveyConsumed",
    title: "What best describes your current diet?",
    progress: "Step 4/6",
    options: [
      {label: "100% whole food, plant based", value: "wfpb"},
      {label: "Mostly vegetarian/plant-based", value: "vegetarian"},
      {label: "Pescatarian", value: "pescatarian"},
      {label: "Some meat most days (includes red meat, pork or poultry)", value: "meat-eater"},
      {label: "Some meat in most meals (includes red meat, pork or poultry)", value: "frequent-meat-eater"}
    ]
  },
  surveyConsumed: {
    type: "multi",
    fieldName: "surveyHabits",
    nextStep: "surveyMealsOut",
    title: "Which of the following do you consume most days?",
    text: "Mark all that apply",
    progress: "Step 5/6",
    options: [
      {label: "Added sugar (includes honey, agave and sweeteners)", value: "sugar"},
      {label: "Refined grains (white rice, pasta, bread, etc.)", value: "grains"},
      {label: "Packaged snacks (pretzels, chips, etc.)", value: "snacks"},
      {label: "Alcohol", value: "alcohol"}
    ]
  },
  surveyMealsOut: {
    type: "choice",
    fieldName: "surveyMealsOut",
    nextStep: "stepLoading",
    title: "How many meals, per week, do you typically eat out or order in?",
    text: "Please choose the most important",
    progress: "Step 6/6",
    options: [
      {label: "0", value: "0"},
      {label: "1-3", value: "1-3"},
      {label: "4-7", value: "4-7"},
      {label: "7+", value: "7+"}
    ]
  },
  surveyWeightLossGoal: {
    type: "choice",
    fieldName: "surveyWeightLossGoal",
    nextStep: "surveyCurrentDiet",
    title: "What is your weight loss goal?",
    text: "Please choose the one that most closely matches your goal",
    progress: "Step 3/6",
    options: [
      {label: "0-5 lbs", value: "0-5"},
      {label: "5-15 lbs", value: "5-15"},
      {label: "15-30 lbs", value: "15-30"},
      {label: "30 lbs +", value: "30+"}
    ]
  },
  surveyPhysicalActivity: {
    type: "choice",
    fieldName: "surveyPhysicalActivity",
    nextStep: "surveyCurrentDiet",
    title: "What is your current level of physical activity?",
    progress: "Step 3/6",
    options: [
      {label: "Little to no activity", value: "little"},
      {label: "Moderate 1-2x per week", value: "moderate"},
      {label: "Regular 3-4x per week", value: "regular"},
      {label: "I’m a machine 5+ per week", value: "machine"}
    ]
  },
  surveyMedicalIssue: {
    type: "choice",
    fieldName: "surveyMedicalIssue",
    nextStep: "surveyCurrentDiet",
    title: "What best describes your medical issue?",
    progress: "Step 3/6",
    options: [
      {label: "Lower blood sugar", value: "lower-blood-sugar"},
      {label: "Lower blood pressure", value: "lower-blood-pressure"},
      {label: "Lower cholesterol", value: "lower-cholesterol"},
      {label: "Reduce inflammation", value: "reduce-inflammation"},
      {label: "Prevention", value: "prevention"},
      {label: "Cancer support", value: "cancer-support"}
    ]
  },
  stepLoading: {
    type: "loading",
    nextStep: "stepOutput"
  },
  stepOutput: {
    type: "output"
  },

}

export const results = {
  titleColumn1: {
    0: "Improved well-being",
    1: "Weight loss",
    2: "Athletic performance",
    3: "Medical",
    4: "Ease & convenience",
  },
  titleColumn2: {
    0: "Your day to day",
    1: "Target goal",
    2: "Level of activity",
    3: {
      0: "Lower blood sugar",
      1: "Lower blood pressure",
      2: "Lower cholesterol",
      3: "Reduce inflammation",
      4: "Prevention",
      5: "Cancer support",
    },
    4: "Your day to day"
  },
  titleColumn3: {
    0: "Your current diet",
    1: "Your current diet",
    2: "Your current diet",
    3: "Your current diet",
    4: "Your current diet",
  },
  titleColumn4: {
    0: "Your habits",
    1: "Your habits",
    2: "Your habits",
    3: "Your habits",
    4: "Your habits",
  },
  column1: {
    0: "A whole food, plant-based (WFPB) diet resets your health and improves your well-being by reducing inflammation and strengthening your immune system. A diet that is rich in whole grains, vegetables, legumes, nuts and seeds forms the basis of good health.",
    1: "A whole food, plant-based (WFPB) diet resets your health and improves your well-being by reducing inflammation and strengthening your immune system. A diet that is rich in whole grains, vegetables, legumes, nuts and seeds keeps insulin low and leptin (satiety hormone) high, triggering weight loss, without the hunger.",
    2: "A whole food, plant-based (WFPB) diet improves your well-being and boosts your athletic performance. A diet rich in whole grains, vegetables, legumes, nuts and seeds keeps blood sugar steady and reduces inflammation, bringing more energy, longer workouts and faster recovery.",
    3: "A whole food, plant-based (WFPB) diet with the reduction of sugar is clinically proven to reverse and prevent chronic disease. It can be used as a prescription to lower blood pressure, cholesterol, reverse cardiovascular disease, pre- and type II diabetes, early onset of dementia and lower the risk of cancer.",
    4: "A whole food, plant-based (WFPB) diet resets your health and improves your well-being by reducing inflammation and strengthening your immune system. A diet that is rich in whole grains, vegetables, legumes, nuts and seeds forms the basis of good health."
  },
  column2: {
    0: "Refraining from added sugar and switching from refined grains to whole ones keeps insulin low providing you with a steady stream of energy throughout the day. You’ll have more energy, be clear headed, lighter and better equipped to face daily challenges.",
    1: "Your target weight loss can be achieved through a high fiber diet composed of whole grains and plant-based protein, along with the reduction of added sugar. This will keep you full while triggering healthy weight loss. You’ll feel lighter, have more energy and shed excess pounds.",
    2: {
      0: (<span>Little to moderate.<br />A high fiber diet composed of whole grains and plant-based protein, along with the reduction of added sugar, will keep you full while fueling you with energy. You’ll sleep better and have more stamina to increase your level of activity. You may well shed a few extra pounds in the process too.</span>),
      1: (<span>Regular to high.<br />A high fiber diet composed of whole grains and plant-based protein is loaded with antioxidants and is anti-inflammatory, boosting your performance, allowing for harder workouts. Consider adding pea-protein to a post-workout green smoothie.</span>)
    },
    3: {
      0: "High blood sugar is so common these days and predominantly caused by diet. If pre-diabetes is your condition, then typically a WFPB diet will reverse your pre-diabetes within 28-days. Type II diabetes can be reversed in a few months with a WFPB. It’s genius!",
      1: "High blood pressure is driven by inelasticity of the arterial walls and increased blood viscosity. A WFPB is rich in potassium, which counterbalances sodium, and lowers blood pressure. Saturated fat in animal protein increases blood viscosity, unlike plant-based protein.",
      2: "A diet high in fiber, low in added sugar, refined grains and saturated fat lowers cholesterol. Expect elevated LDL (above 120) to fall on average 40 points in 28-days on a truly WFPB intervention while keeping HDL unchanged.",
      3: "A diet high in fiber, low in added sugar, refined grains and saturated fat lowers inflammation - the precursor to chronic disease. Expect hsCRP (high sensitivity C-reactive protein) to fall within 28-days. The reduction in inflammation can also be observed in the gut microbiome.",
      4: "Prevention is way better than having to treat! Not only does a WFPB diet prevent disease, but it will also fuel you with energy, improve your sleep and mental acuity - and you'll look fabulous. A WFPB prevents disease by keeping inflammation low (the precursor to chronic disease) and your immune system strong!",
      5: "A whole food, plant-based (WFPB) diet has been clinically proven to reduce inflammation, strengthen the immune system and in certain cases influence gene expression. A reduction in sugar and refined grains reduces stimulation of insulin-like growth factor which can slow cancer cell proliferation."
    },
    4: "We are overscheduled and busy. While a healthy diet, rich in whole foods supports us, it takes time to prepare - all of that shopping and chopping! The optimal diet should be balanced across plant-based protein, complex carbs and good-for-you fat."
  },
  column3: {
    0: "Well done for already embracing a WFPB diet. Focus on keeping those grains whole, increasing vegetable and legume intake, reducing all sugar and ensuring enough plant-based protein for satiety.",
    1: "As a vegetarian you are off to a great start! Focus on keeping those grains whole, reducing all sugar and consider swapping some dairy for more plant-based protein. It will lower inflammation.",
    2: "As a pescatarian you are off to a great start! In order to take your well-being to the next level switch some fish for more plant-based protein. This will increase your fiber intake and improve gut health while boosting satiety.",
    3: "As a meat-eater you’ll feel the benefit of a WFPB diet. Switch animal-based protein for plant-based protein. This will increase your fiber intake and radically improve your gut health. You’ll feel the difference within days.",
    4: "As a frequent meat-eater you’ll feel the benefit of a WFPB diet. Switch animal-based protein for plant-based protein. This will increase your fiber intake and radically improve your gut health. You’ll feel the difference within days.",
    medical: {
      0: { // Lower blood sugar
        0: "Well done for already embracing a WFPB diet. Focus on keeping those grains whole, increasing vegetable and legume intake, reducing all sugar and ensuring enough plant-based protein for satiety.",
        1: "As a vegetarian you are off to a great start! Focus on keeping those grains whole, eliminating all sugar and sweeteners, and swap dairy for more fiber-rich, plant-based protein.",
        2: "As a pescatarian you are off to a good start! In order to effectively reduce blood sugar switch some fish for fiber-rich, plant-based proteins like legumes. Focus on keeping any grain whole and eliminating sugar and sweeteners.",
        3: "Lowering your meat consumption in favor of fiber-rich, plant-based proteins, like legumes, will reduce your blood sugar significantly. Focus on keeping any grain whole and eliminating sugar and sweeteners.",
        4: "As a frequent meat-eater, lowering your meat consumption in favor of fiber-rich, plant-based proteins, like legumes, will reduce your blood sugar significantly. Focus on keeping any grain whole and eliminating sugar and sweeteners.",
      },
      1: { // Lower blood pressure
        0: "Well done for already embracing a WFPB diet. Focus on keeping those grains whole, increasing vegetable and legume intake, reducing all sugar and ensuring enough plant-based protein for satiety.",
        1: "As a vegetarian you are off to a great start! Focus on keeping those grains whole, adding leafy greens, reducing all sugar and swapping dairy for more fiber-rich, plant-based protein. It will help lower your blood pressure.",
        2: "As a pescatarian you are off to a good start! In order to address the blood pressure switch some fish for more plant-based protein. Add more beans to your diet for an increase in potassium.",
        3: "Lowering your meat consumption in favor of plant-based protein will reduce your blood pressure significantly. A reduction in sugar also reduces inflammation and improves the elasticity of arterial walls.",
        4: "As a frequent meat-eater, switching animal-based protein for plant-based protein will drop your blood pressure significantly. A reduction in sugar also reduces inflammation and improves the elasticity of arterial walls.",
      },
      2: { // Lower cholesterol
        0: "Well done for already embracing a WFPB diet. Focus on keeping those grains whole, increasing vegetable and legume intake, reducing all sugar and ensuring enough plant-based protein for improved cholesterol outcomes.",
        1: "As a vegetarian you are off to a good start! Focus on keeping those grains whole, eliminating sugar and swapping dairy for more fiber-rich, plant-based protein. You’ll experience dramatic results in 28-days.",
        2: "As a pescatarian you are off to a good start! In order to lower cholesterol, switch some fish for more fiber-rich, plant-based protein options. Reducing sugar will lower cholesterol.",
        3: "Lowering your meat consumption in favor of plant-based protein will reduce cholesterol. A reduction in sugar also reduces inflammation and will bring LDL back in check.",
        4: "As a frequent meat eater, lowering your meat consumption in favor of plant-based protein will reduce cholesterol. A reduction in sugar also reduces inflammation and will bring LDL back in check.",
      },
      3: { // Reduce inflammation
        0: "Well done for already embracing a WFPB diet. Focus on keeping those grains whole, increasing vegetable and legume intake, reducing all sugar and ensuring enough plant-based protein for a reduction in chronic inflammation.",
        1: "As a vegetarian you are off to a great start! Focus on keeping those grains whole, adding dark leafy greens, eliminating sugar and swapping dairy for more plant-based protein, which will lower inflammation and keep your immune system stronger.",
        2: "As a pescatarian you are off to a good start! In order to reduce inflammation, switch some fish for more fiber-rich, plant-based protein, like legumes. Focus on keeping grains whole and cutting out the added sugar.",
        3: "Swapping your meat consumption in favor of plant-based protein will reduce LDL and inflammation - a double whammy! A reduction in sugar further improves results.",
        4: "As a frequent meat eater, swapping your meat consumption in favor of plant-based protein will reduce LDL and inflammation - a double whammy! A reduction in sugar further improves results.",
      },
      4: { // Prevention
        0: "Well done for already embracing a WFPB diet. Focus on keeping those grains whole, increasing vegetable and leafy green intake, and eliminating sugar in order to keep inflammation low and your immune system as strong as possible.",
        1: "As a vegetarian you are off to a great start! Focus on keeping those grains whole, adding dark leafy greens, eliminating sugar and swapping dairy for more plant-based protein, which will lower inflammation and keep your immune system stronger.",
        2: "Consider replacing some fish for fiber-heavy, plant-based protein options like legumes. Focus on eliminating sugar, keeping grains whole and adding leafy greens which will further reduce inflammation and keep your immune system stronger.",
        3: "Swapping your meat consumption (especially that of processed meats) in favor of fiber-rich, plant-based protein reduces inflammation. Increasing your consumption of dark leafy greens, eliminating sugar and keeping grains whole, will further strengthen your immune system.",
        4: "As a frequent meat eater, swapping your meat consumption (especially that of processed meats) in favor of fiber-rich, plant-based protein reduces inflammation. Increasing your consumption of dark leafy greens, eliminating sugar and keeping grains whole, will further strengthen your immune system.",
      },
      5: { // Cancer support
        0: "Well done for already embracing a WFPB diet. Focus on keeping those grains whole, increasing vegetable and leafy green intake, and eliminating sugar in order to keep your immune system as strong as possible.",
        1: "As a vegetarian you are off to a great start! Focus on keeping those grains whole, eliminating sugar and swapping dairy for more plant-based protein, which will lower inflammation and keep your immune system stronger.",
        2: "Consider replacing some fish for fiber-rich plant-based protein, such as legumes. Focus on eliminating sugar which will further reduce inflammation and keep your immune system stronger.",
        3: "Swapping your meat consumption, (especially that of processed meats) in favor of fiber-rich, plant-based protein reduces cancer risk. Increasing your consumption of dark leafy greens will further strengthen your immune system.",
        4: "As a frequent meat eater, swapping your meat consumption, (especially that of processed meats) in favor of fiber-rich, plant-based protein reduces cancer risk. Increasing your consumption of dark leafy greens will further strengthen your immune system.",
      }
    }
  },
  column4: {
    0: "“Extracurricular” habits can make or break a good diet. Well done for keeping habits in check. When breaking a habit, healthy substitution over denial is more successful in creating new, good habits.",
    1: "“Extracurricular” habits can make or break a good diet. Resetting habits can seem overwhelming but substitution over denial helps, as does accountability and support for those tougher moments."
  },
  summary: {
    0: {
      0: (<span>Well done!<br />You are a whole food plant-based eater with good habits!</span>),
      1: (<span>Well done!<br />You are a whole food plant-based eater with room for habit improvement!</span>),
    },
    1: {
      0: (<span>Well done!<br />You are a vegetarian with good habits!</span>),
      1: "You are a vegetarian with room for habit improvement!",
    },
    2: {
      0: "You are a pescatarian with good habits!",
      1: "You are a pescatarian with room for habit improvement!",
    },
    3: {
      0: "You are a meat-eater with good habits. You’ll feel even better with a WFPB diet!",
      1: "You are a meat-eater with room for habit improvement.",
    },
    4: {
      0: "You are a frequent meat-eater with good habits. You’ll feel even better with a WFPB diet!",
      1: "You are a frequent meat-eater with room for habit improvement."
    }
  },
  plan: {
    0: "Quickstart",
    1: "Reboot"
  },
  recap: {
    0: {
      0: (<span>Plantable’s one-week Quickstart with delicious, balanced, fully-prepared meals and your personal coach can take your well-being to the next level.<br /><br />See what happens in just 7 days.</span>),
      1: (<span>Plantable’s delicious WFPB meals are balanced to provide satiety which will make habit change easier. Your personal coach will work with you to establish a routine that works for you.<br /><br />28 days is the perfect length of time to reset habits and experience a full body Reboot.</span>)
    },
    1: {
      0: (<span>Plantable’s one-week Quickstart with delicious, balanced, fully-prepared meals and your personal coach can take your well-being to the next level.<br /><br />You’ll begin to lose weight and feel better within 7 days.</span>),
      1: (<span>Plantable’s delicious WFPB meals are balanced to provide satiety which will make habit change easier. Your personal coach will work with you to optimize your healthy weight loss.<br /><br />28 days is the perfect length of time to reset habits and experience a full body Reboot.</span>)
    },
    2: {
      0: (<span>Plantable’s one-week Quickstart with delicious, balanced, fully-prepared meals and your personal coach can take your well-being to the next level.<br /><br />See what happens in just 7 days.</span>),
      1: (<span>Plantable’s delicious WFPB meals are balanced to provide satiety which will make habit change easier. Your personal coach will work with you to establish a routine that works for you.<br /><br />28 days is the perfect length of time to reset habits and experience a full body Reboot.</span>)
    },
    3: {
      0: (<span>Plantable’s delicious WFPB meals are balanced to provide satiety which will make habit change easier. Your personal coach will work with you to optimize your  routine, improve your energy to fuel performance.<br /><br />28 days is perfect to reset habits and experience a full body Reboot.</span>),
      1: (<span>Plantable’s delicious WFPB meals are balanced to provide satiety which will make habit change easier. Your personal coach will work with you to optimize your  routine, improve your energy to fuel performance.<br /><br />28 days is perfect to reset habits and experience a full body Reboot.</span>)
    },
    4: {
      0: (<span>Plantable’s one-week Quickstart with delicious, balanced, fully-prepared meals and your personal coach can take your well-being to the next level.<br /><br />See what happens in just 7 days.</span>),
      1: (<span>Plantable’s delicious WFPB meals are balanced to provide satiety which will make habit change easier. Your personal coach will work with you to establish a routine that works for you.<br /><br />28 days is the perfect length of time to reset habits and experience a full body Reboot.</span>)
    }
  },
  results: {
    0: {
      0: (
        <ul>
          <li>Increased energy</li>
          <li>Feel lighter</li>
          <li>Reinforced positive habits</li>
          <li>Improved blood sugar</li>
          <li>Reduced inflammation</li>
        </ul>
      ),
      1: (
        <ul>
          <li>Increased energy</li>
          <li>New dietary habits</li>
          <li>Weight loss</li>
          <li>Reduced inflammation</li>
          <li>Improved gut health</li>
        </ul>
      )
    },
    1: {
      0: (
        <ul>
          <li>Weight loss</li>
          <li>Increased energy</li>
          <li>Lose the bloat</li>
          <li>Improved digestion</li>
        </ul>
      ),
      1: (
        <ul>
          <li>Weight loss</li>
          <li>Increased energy</li>
          <li>New dietary habits</li>
          <li>Reduced inflammation</li>
          <li>Improved gut health</li>
        </ul>
      ),
      3: (
        <ul>
          <li>Weight loss</li>
          <li>Increased energy</li>
          <li>Reinforced positive habits</li>
          <li>Reduced inflammation</li>
          <li>Improved gut health</li>
        </ul>
      ),
    },
    2: {
      0: (
        <ul>
          <li>Increased energy</li>
          <li>Feel lighter</li>
          <li>Reinforced positive habits</li>
          <li>Improved blood sugar</li>
          <li>Reduced inflammation</li>
        </ul>
      ),
      1: (
        <ul>
          <li>Increased energy</li>
          <li>New dietary habits</li>
          <li>Weight loss</li>
          <li>Reduced inflammation</li>
          <li>Improved gut health</li>
        </ul>
      )
    },
    3: {
      0: (
        <ul>
          <li>Lower blood sugar</li>
          <li>Reduced cholesterol</li>
          <li>Reduced blood pressure</li>
          <li>Reduced inflammation</li>
          <li>Excess weight loss</li>
        </ul>
      ),
      1: (
        <ul>
          <li>Reduced blood pressure</li>
          <li>Reduced cholesterol</li>
          <li>Lowered blood sugar</li>
          <li>Reduced inflammation</li>
          <li>Excess weight loss</li>
        </ul>
      ),
      2: (
        <ul>
          <li>Lower cholesterol</li>
          <li>Reduced blood sugar</li>
          <li>Reduced blood pressure</li>
          <li>Reduced inflammation</li>
          <li>Excess weight loss</li>
        </ul>
      ),
      3: (
        <ul>
          <li>Reduced inflammation</li>
          <li>Reduced blood sugar</li>
          <li>Reduced blood pressure</li>
          <li>Lower cholesterol</li>
          <li>Weight loss</li>
        </ul>
      ),
      4: (
        <ul>
          <li>Reduced inflammation</li>
          <li>Strengthened immune system</li>
          <li>Improved sleep</li>
          <li>Excess weight loss</li>
          <li>More energy</li>
        </ul>
      ),
      5: (
        <ul>
          <li>Reduced inflammation</li>
          <li>Strengthened immune system</li>
          <li>Improved cardiovascular health</li>
          <li>Excess weight loss</li>
          <li>Improved well-being</li>
        </ul>
      ),
    },
    4: {
      0: (
        <ul>
          <li>Increased energy</li>
          <li>Feel lighter</li>
          <li>Reinforced positive habits</li>
          <li>More time for you!</li>
        </ul>
      ),
      1: (
        <ul>
          <li>Increased energy</li>
          <li>New dietary habits</li>
          <li>Reduced inflammation</li>
          <li>Excess weight loss</li>
          <li>More time for you!</li>
        </ul>
      )
    }
  },
  fraseVariabile: {
    0: "Here is how a plant-based diet can improve your well-being.",
    1: "Here is how a plant-based diet can promote healthy weight loss.",
    2: "Here is how a plant-based diet can improve your athletic performance.",
    3: {
      0: "Here is how a plant-based diet can lower your blood sugar.",
      1: "Here is how a plant-based diet can lower your blood pressure.",
      2: "Here is how a plant-based diet can lower your cholesterol.",
      3: "Here is how a plant-based diet can reduce your inflammation.",
      4: "Here is how a plant-based diet can effectively prevent disease.",
      5: "Here is how a plant-based diet can support you through and after cancer."
    },
    4: "Here is how a plant-based diet can improve your daily life."
  }
}
