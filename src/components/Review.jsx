import React from 'react';
function Review(props) {

  function getStarsStyle(){
    if(props.stars){
      return({width: (parseFloat(props.stars)*20) + "%"});
    }
    return({width: "100%"});
  }

  return (
    <div className="single-review">
      <p className="name">{ props.name }</p>
      <div className="stars-container">
        <div className="star-fill" style={getStarsStyle()}></div>
        <div className="star-mask"></div>
      </div>
      { props.text }
    </div>
  )
}
export default props => <Review {...props} />;
