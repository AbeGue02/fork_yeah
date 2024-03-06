import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import '../App.css'

export default function Header() {
	const navigate = useNavigate()

	return (
		<div>
			<header className='horizontal-flex'>
				<h1>Fork Yeah!</h1>
				<SearchBar />
			</header>
			<nav>
				<ul>
					<li onClick={() => navigate('/')}>Home</li>
					<li onClick={() => navigate('/meal')}>Meal</li>
					<li onClick={() => navigate('/recipes')}>Recipes</li>
				</ul>
			</nav>
		</div>
	)
}
