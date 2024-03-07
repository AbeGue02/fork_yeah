import { useNavigate } from 'react-router-dom'

export default function ListItem({ meal }) {
	const navigate = useNavigate()

	return (
		<div className="listItem horizontal-flex">
			<div className="listItemImageContainer">
				<img src={meal.strMealThumb} width="400px" alt={'Not available'} />
			</div>
			<div className="slideup">
				<div className="vertical-flex">
					<h4>{meal.strMeal}</h4>
					<button
						onClick={() => {
							navigate(`/meals/${meal.idMeal}`)
						}}
					>
						Go to Recipe
					</button>
				</div>
			</div>
		</div>
	)
}
