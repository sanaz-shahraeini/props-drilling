import React from 'react'

const Student = (props) => {
  // props.age = props.age + 10
  return (
    <div style={{textAlign:"center"}}>
      <h2>React Student</h2>
      <strong>Name:{props.name}</strong>
      <br/>
      <strong>Age:{props.age}</strong>
    </div>
  )
}

export default Student
