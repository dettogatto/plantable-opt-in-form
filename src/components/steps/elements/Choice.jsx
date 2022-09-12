import React from 'react';
import {useSpring, animated, config} from 'react-spring'

function Choice(props) {

  const spring = useSpring({
    config: {...config.slow, clamp: true},
    width: props.active ? '100%' : '0%'
  })

  function clickHandler(){
    props.setter(props.value);
  }

  function getClassName(){
    let res = "choice-element";
    if(props.active){ res += " active" }
    if(props.classes){ res += " " + props.classes }
    return res
  }

  function getIndex(){
    if(!props.index){ return null; }
    return (
      <div className="letter-container">
        <div>{props.index}</div>
      </div>
    )
  }

  return (
    <div className={getClassName()} onClick={clickHandler}>
      { getIndex() }
      <animated.div className="checked-bar" style={spring}></animated.div>
      <div className="paragraph">
        {props.label}
      </div>
      <div className="paragraph sublabel">
        {props.sublabel}
      </div>
    </div>
  )
}
export default props => <Choice {...props} />;
