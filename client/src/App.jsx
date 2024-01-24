import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/homePage';
import WishlistPage from './pages/wishlistPage';
import BasketPage from './pages/basketPage';
import DetailPage from './pages/detailPage';
import AddPage from './pages/addPage';
import MainLayout from './layout/mainLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/add" element={<AddPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
