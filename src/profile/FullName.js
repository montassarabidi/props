import React from 'react'

const FullName = props => {
  return (
    <h1>
    <div className="nam"></div>
    <div>{props.children} </div>
    <div>{props.name}</div>
    </h1>
  )
}
FullName.defaultProps = {
    name: "Montassar Abidi",
};

export default FullName