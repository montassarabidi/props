import PropTypes from 'prop-types'

const HandleName = ({open}) => {
  return (
    <button className="oo" onClick={open}>
    open{" "}
  </button>
  )
}

HandleName.propTypes = {}
HandleName.propTypes = {
    open : PropTypes.string,
  };

export default HandleName