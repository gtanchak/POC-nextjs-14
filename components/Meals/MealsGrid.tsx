import classes from './meals-grid.module.css'
import MealItem, {MealItemProps} from "@/components/Meals/MealItem";

type MealsGridProps = {
    meals: MealItemProps[]
}

export default function MealsGrid({meals}:MealsGridProps) {
    return (
        <ul className={classes.meals}>
            {meals.map(meal => <li key={meal.id}>
                <MealItem {...meal} />
            </li>)}
        </ul>
    )
}