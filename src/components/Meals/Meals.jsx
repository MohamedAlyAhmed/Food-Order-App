import { Fragment } from "react";
import MealsAvaliable from "./MealsAvaliable";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <MealsAvaliable />
    </Fragment>
  );
};

export default Meals;
