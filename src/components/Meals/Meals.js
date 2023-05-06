import { Fragment } from 'react';
import AvailabaleMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailabaleMeals />
    </Fragment>
  );
};

export default Meals;
