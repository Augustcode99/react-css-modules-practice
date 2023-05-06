import buttonStyle from "./button.module.css";

const Button = ({ name }) => {
  return <button className={buttonStyle.btn}>{name}</button>;
};

export default Button;
