import React from 'react'

const FullName = props => {
  return (
    <h6>
    <div className="nam"></div>
    <div>{props.children} </div>
    <div>{props.name}</div>
    </h6>
  )
}
FullName.defaultProps = {
    name: "Montassar Abidi",
};

export default FullName