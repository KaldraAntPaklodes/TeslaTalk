import PropTypes from "prop-types";
import "./Button.css"

const Button = ({ className, children, ...props }) => {
  return (
    <button className={`styled-button ${className}`} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: "",
};

export default Button;