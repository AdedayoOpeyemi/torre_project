import React from 'react';

function SkillButton(props) {

  return (
    <button id={props.id} >
      {props.name}
    </button>
  )
}

export default SkillButton