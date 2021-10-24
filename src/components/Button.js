import PropTypes from 'prop-types'

// *** SUMMARY ***
// the Button component is represented by a function
// destructred propTypes that are defined below are passed into the function
// these propTypes correspond to camelcase attributes of the same name on the button element
// finally, the button is returned, so that it can be used elsewhere by simply importing it
// and passing in the correct value needed for the proTypes
const Button = ({ color, text, onClick }) => {

    return <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>
        {text}
    </button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = { // first p is lowercase
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func, // passing a function as a PropType
}

export default Button
