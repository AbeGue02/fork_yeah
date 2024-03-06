import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

export default function List () {
    
    const { category } = useParams()
    
    const [results, setResults] = useState([])

    useEffect(() => {
        const getResults = async () => {
            let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            setResults(response.data.meals)
        }

        getResults()
    }, [])

    return (
        <div>
            {
                results.map((result) => (
                    <h3>{result.strMeal}</h3>
                ))
            }
        </div>
    )
}