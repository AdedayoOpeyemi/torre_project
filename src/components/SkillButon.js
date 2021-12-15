import React from 'react';

function skillButton(buttonDetails) {
  const {id, name,} = buttonDetails

  const getSkillDetails = (e) => {
    const skillId = e.target.id
  }


  return (
    <button id={id} onSubmit={getSkillDetails}>
      {name}
    </button>
  )
}

export default skillButton