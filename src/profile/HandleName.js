import PropTypes from 'prop-types'

const HandleName = ({open}) => {
  return (
    <h5><button className="oo" onClick={open}>
    open{" "}
  </button>
  </h5>
  )
}

HandleName.propTypes = {}
HandleName.propTypes = {
    open : PropTypes.string,
  };

export default HandleName