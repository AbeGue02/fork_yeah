import { useState, useEffect } from "react"
import axios from 'axios'

export default function Details () {


    const [details, setDetails] = useState([])

    useEffect(() => {
        const getDetails = async () => {
            let response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
            setDetails(response.data.meals[0])
        }
        getDetails()
    }, [])

    useEffect(() => {
        console.log(details)
    }, [details])


    const ingredients = [ {ing: `${details.strIngredient1} ${details.strMeasure1}`},
                        {ing: `${details.strIngredient2} ${details.strMeasure2}`},
                        {ing: `${details.strIngredient3} ${details.strMeasure3}`},
                        {ing: `${details.strIngredient4} ${details.strMeasure4}`},
                        {ing: `${details.strIngredient5} ${details.strMeasure5}`},
                        {ing: `${details.strIngredient6} ${details.strMeasure6}`},
                        {ing: `${details.strIngredient7} ${details.strMeasure7}`},
                        {ing: `${details.strIngredient8} ${details.strMeasure8}`},
                        {ing: `${details.strIngredient9} ${details.strMeasure9}`},
                        {ing: `${details.strIngredient10} ${details.strMeasure10}`},
                        {ing: `${details.strIngredient11} ${details.strMeasure11}`},
                        {ing: `${details.strIngredient12} ${details.strMeasure12}`},
                        {ing: `${details.strIngredient13} ${details.strMeasure13}`},
                        {ing: `${details.strIngredient14} ${details.strMeasure14}`},
                        {ing: `${details.strIngredient15} ${details.strMeasure15}`},
                        {ing: `${details.strIngredient16} ${details.strMeasure16}`},
                        {ing: `${details.strIngredient17} ${details.strMeasure17}`},
                        {ing: `${details.strIngredient18} ${details.strMeasure18}`},
                        {ing: `${details.strIngredient19} ${details.strMeasure19}`},
                        {ing: `${details.strIngredient20} ${details.strMeasure20}`}]


    return (
        <div className="detailsPage">
            
            <div>
                <div className="mealPic">
                    <img src = {details.strMealThumb} width="180px"></img>
                </div>
                <div className="ingredientList">
                    <div key={ingredients.strMeal}> <b>Ingredients: </b>
                    {
                        ingredients.map((ingredient)=> {
                            if (ingredient.ing !== "null null") return <div>{ingredient.ing}</div>
                        })
                    }         
                    </div>
                </div>
            </div>
            <div className="mealInfo">
                <div className="mealName">{details.strMeal} ({details.strArea})</div>
                <div className="instruction"><b>Instructions:</b> {details.strInstructions}</div>
            </div>
        </div> 
    )
}