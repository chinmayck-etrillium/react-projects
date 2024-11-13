import MealItem from "./MealItem";
import useHttp from "./hooks/useHttp";

export default function Meals() {
  const response = useHttp("http://localhost:3000/meals");
  const loadedMeals = response.results || [];
  return (
    <ul id="meals">
      {loadedMeals.length &&
        loadedMeals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}
