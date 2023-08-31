import Button from "./Button";
import classes from "./ErrorModel.module.css";

const ErrorModel = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <div className={classes.modal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p className={classes.content}>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModel;
