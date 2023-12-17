import ApiFetch from './components/ApiFetch'
import Card from './components/Card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Categories from './components/categories/Categories'
import Cart from './components/addToCart/Cart'
import Wishlist from './components/wishlist/Wishlist'






function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path={`/apifetch`} element={<ApiFetch/>}/>
          <Route path={`/id/:id`} element={<Card/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path='/categorie' element={<Categories/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
