import { useState } from 'react'
import './App.css'
import Maine_page from './main_page/main_page'
import Aboute from './aboute/aboute'
import Contract_product from './contract_product/contract_product'
import Product_avtohim from './product_avtohim/product_avtohim'
import Own_product from './own_product/own_product'
import Product_agtech from './product_ag-tech/product_ag-tech'
import Blog from './blog/blog'
import Contact from './contact/contact'
import Politics from './politics/politics'
import Blog_more from './blog_more/blog_more'
import {Routes,Route,Link} from 'react-router-dom'
function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Maine_page/>} />
        <Route path='about' element={<Aboute/>}/>
        <Route path='contract_product' element={<Contract_product/>}/>
        <Route path='product_avtohim' element={<Product_avtohim/>}/>
        <Route path='own_product' element={<Own_product/>}/>
        <Route path='product_agtech' element={<Product_agtech/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='politics' element={<Politics/>}/>
        <Route path='blog_more' element={<Blog_more/>}/>
      </Routes>
    </>
  )
}
export default App
