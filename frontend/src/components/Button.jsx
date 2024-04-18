import React from 'react'

function Button(props) {
  return (
	<button className="button-59" id = {props.id} role="button" onClick={props.onclick}>{props.content}</button>

  )
}

export default Button