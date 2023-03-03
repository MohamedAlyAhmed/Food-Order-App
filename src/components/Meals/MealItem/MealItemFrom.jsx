import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemFrom.module.css";

const MealItemFrom = (props) => {
  const [amoutIsValid, setAmoutIsValid] = useState(true);
  const amountValue = useRef();

  const amountSubmitHandler = (event) => {
    event.preventDefault();

    //Always Return String
    const enteredAmountValue = amountValue.current.value;
    //Convert it to Number
    const enteredAmountNumber = +enteredAmountValue;

    if (
      //Some Validation For Amount Value
      enteredAmountValue.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1
    ) {
      setAmoutIsValid(false);
      return;
    }
    setAmoutIsValid(true);
    //To Pass Value To Parent
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={amountSubmitHandler}>
      <Input
        ref={amountValue}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amoutIsValid && <p>please enter avalid amount from 1 to 5</p>}
    </form>
  );
};

export default MealItemFrom;
