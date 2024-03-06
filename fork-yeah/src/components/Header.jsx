import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import './App.css'

export default function Header() {
	const navigate = useNavigate()

	return (
		<>
			<div>
				<SearchBar />
			</div>
			<nav>
				<ul>
					<li onClick={() => navigate('/')}>Home</li>
					<li onClick={() => navigate('/meal')}>Meal</li>
					<li onClick={() => navigate('/recipes')}>Recipes</li>
				</ul>
			</nav>
		</>
	)
}
