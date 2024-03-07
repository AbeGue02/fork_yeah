import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import List from './List'
import Details from './Details'
import Random from './Random'

export default function Main () {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/categories/:category' element={<List/>} />
                <Route path='/search/:searchParam' element={<List/>} />
                <Route path='/meals/:id' element={<Details/>} />
                <Route path='meals/random' element={<Random/>} />
            </Routes>
        </main>
    )
}