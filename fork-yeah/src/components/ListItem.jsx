import { useNavigate } from 'react-router-dom'

export default function ListItem({ meal }) {
	const navigate = useNavigate()

	return (
		<div className="listItem horizontal-flex">
			<div className="listItemImageContainer">
				<img src={meal.strMealThumb} alt={meal.strMeal} className='listItemImage' />
			</div>
			<div className="slideup">
				<div className="listItemDetails">
					<h4>{meal.strMeal}</h4>
					<button
						className='listItemButton'
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
