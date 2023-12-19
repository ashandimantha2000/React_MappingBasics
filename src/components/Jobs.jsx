import React from 'react'

function Jobs(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Degree: {props.degree}</p>
      <p>Occupation: {props.job}</p>
    </div>
  )
}

export default Jobs