import classes from "./Card.module.css";
import "./UserList.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className} ${props.className2}`}>
      {props.children}
    </div>
  );
};

export default Card;
