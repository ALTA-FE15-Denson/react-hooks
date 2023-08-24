import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Movie from './pages/movie'
import DetailMovie from './pages/detailMovie'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/'/>
        <Route element={<Movie/>} path='/movie'/>
        <Route element={<DetailMovie/>} path='/movie-detail/:id'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App