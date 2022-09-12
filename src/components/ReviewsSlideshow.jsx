import React, {useState} from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import { Swipeable } from 'react-swipeable';
import Review from './Review';

let slides = [
  {
    key: uuidv4(),
    content: (
      <Review
        name="Kristin K."
        stars={5}
        text="I am on the Plantable plan for the foreseeable future. As a busy working mom with diabetes, Plantable has been a lifesaver. I feel great, and after 47 years I have officially kicked the sugar habit and artificial sweeteners for the first time ever!"
        />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Review
        name="Alexandra P. "
        stars={4.5}
        text="We really enjoyed the first week of Plantable: there was a lot of variety, the food was delicious and it was so easy to heat it up and eat it! Healthy, satiating, yummy. What more can we ask for?"
        />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Review
        name="Becky F."
        stars={5}
        text="I am about to finish my very first Plantable Reboot, and it has truly been a magical experience for me. Plantable is everything it promises to be, and more. I have changed my eating habits for the better and enjoyed every delicious bite. I have lost weight, been released from the stranglehold sugar had on me, and most of all, learned so much about eating and nutrition that will forever change my relationship with food for the better."
        />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Review
        name="Audrey T."
        stars={4}
        text="I have lost 4.3 pounds total in the first 2 weeks! That is pretty exciting. I did pretty much everything you can think of the past three months and had not been able to lose even half a pound."
        />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Review
        name="Dotsie B."
        stars={4.5}
        text="Plantable’s menus and powerful plant foods, which come conveniently packed and ready to eat, will power your sport, your life and your health. I am a major fan."
        />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Review
        name="Mindy M."
        stars={5}
        text="The food tastes really good! It’s truly delicious and I never feel deprived. I hate calling it a diet, I tell people I’m elevating my eating."
        />
    )
  },
  {
    key: uuidv4(),
    content: (
      <Review
        name="Dr. Erica J."
        stars={4.5}
        text="Eating a whole food, plant-based diet reduces inflammation, gives you more energy and I’ve personally seen the positive effects it has on managing weight, cholesterol and overall well-being. And you can’t beat the convenience and service of Plantable. It’s about creating a mindset change."
        />
    )
  },

];

function ReviewsSlideshow (){

  const [toSlide, setToSlide] = useState(0);

  function nextSlide(){
    setToSlide((prev) => (prev + 1));
  }
  function prevSlide(){
    setToSlide((prev) => (prev - 1));
  }
  function handleClick(e){
    if(e.clientX >= window.innerWidth/2){
      nextSlide();
    } else {
      prevSlide();
    }
  }

  return (
    <div className="carousel" onClick={handleClick}>
      <Swipeable
        className="swipeable"
        onSwipedLeft={nextSlide}
        onSwipedRight={prevSlide}
        >
      </Swipeable>
      <Carousel
        slides={slides}
        goToSlide={toSlide}
        offsetRadius={2}
        showNavigation={false}
        animationConfig={config.gentle}
        />
    </div>
  );
}

export default ReviewsSlideshow;
