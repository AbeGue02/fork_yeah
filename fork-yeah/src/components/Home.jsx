import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Home () {
    
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        const getCategories = async () => {
            let response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            //console.log(response.data.categories)
            setCategories(response.data.categories)
        }

        getCategories()
    }, [])

    useEffect(() => {
        console.log(categories)
    }, [categories])

    return (
        <div className="homeScreen">
            <div className="categories">
                {
                    categories
                    ? categories.map((category) => (
                        <button
                            key={category.idCategory}
                            onClick={() => {
                                navigate(`/categories/${category.strCategory}`)
                            }}>{category.strCategory}</button>
                    ))
                    : <h2>Loading</h2>
                }
            </div>
        </div>
    )
}