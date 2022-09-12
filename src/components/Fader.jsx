import React, { useState, useEffect } from 'react';
function Fader(props) {

  useEffect(() => {
    console.log("Fader mounted");
    return ( () => {console.log("Fader unmounted");} );
  }, [])

  return (
    <div className="fader">
      { props.children }
    </div>
  )
}
export default props => <Fader {...props} />;
