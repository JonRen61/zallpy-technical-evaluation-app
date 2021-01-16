import React from 'react'

function FormGroup(props) {
  return (
    <div className="form_group">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </div>
  )
}

export default FormGroup