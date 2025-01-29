import React from 'react'
import Student from './Student'

const Main = (props) => {
  // props.age = props.age + 10
  return (
    <div>
      Main:
      <Student name={props.name} age={props.age}/>
      <Student name="Reza" age={30}/>
    </div>
  )
}

export default Main
