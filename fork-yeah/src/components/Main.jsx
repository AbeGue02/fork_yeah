import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import List from './List'
import Details from './Details'

export default function Main () {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/categories/:category' element={<List/>} />
            <Route path='/meals/:id' element={<Details/>} />
        </Routes>
        </>
    )
}