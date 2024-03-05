import { useState } from 'react'

function SearchBar(props) {
	const [searchBarText, setSearchBarText] = useState('')
	const handleChange = (e) => {
		setSearchBarText(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Searching Recipes..', searchBarText)

		setSearchBarText('')
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
