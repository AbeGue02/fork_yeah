import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchBar() {
	
	const [searchBarText, setSearchBarText] = useState('')
	const navigate = useNavigate()
	
	const handleChange = (e) => {
		setSearchBarText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		navigate(`/search/${searchBarText.split(' ').join('+')}`)
	}

	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					id="text"
					value={searchBarText}
					placeholder="Search Recipe"
					onChange={handleChange}
				/>
				<button type="submit">Search</button>
			</form>
		</div>
	)
}
export default SearchBar
