import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoadingSpinner from "./LoadingSpinner"

export default function Home () {
    return (
        <div className="homeScreen">
            
            {
                categories.length
                ? (
                    <div className="categories">
                        {
                            categories.map((category) => (
                                <button
                                    key={category.idCategory}
                                    onClick={() => {
                                        navigate(`/categories/${category.strCategory}`)
                                    }}>{category.strCategory}
                                </button>
                            ))
                        }
                    </div>
                ) : (
                    <div>
                        <LoadingSpinner/>
                    </div>)
                }
            
            
        </div>
    )
}