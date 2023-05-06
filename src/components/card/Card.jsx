import Button from "../button/Button.jsx";
import cardStyle from "./card.module.css";
const Card = (props) => {
  const { btnName, image, language } = props;
  return (
    <div className={cardStyle.card}>
      <h3>{language}</h3>
      <img src={image} alt={language} />
      <Button name={btnName} />
    </div>
  );
};

export default Card;
