import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ListItem from './ListItem'

export default function List() {
	const { category, searchParam } = useParams()
	// add in searchparam hook to get url

	const [results, setResults] = useState([])

	// initially set noresults as false
	const [noResults, setNoResults] = useState(false)

	useEffect(() => {
		const getResults = async () => {
			// set to true assuming results wil return an object
			setNoResults(true)
			let url = 'https://www.themealdb.com/api/json/v1/1/'

			if (category) {
				url += `filter.php?c=${category}`
			} else if (searchParam) {
				url += `search.php?s=${searchParam}`
			} else {
				// if no category or searchparam => false
				setNoResults(false)
				setResults([])
				return
			}

			const response = await axios.get(url)
			console.log(response)

			setResults(response.data.meals || [])
		}
		getResults()
	}, [category, searchParam])

	return (
		<div>
			<h3>
				{results && results.length > 0 ? (
					results.map((result) => (
						<ListItem key={result.idMeal} meal={result} />
					))
				) : (
					<p>No results found.</p>
				)}
			</h3>
		</div>
	)
}
