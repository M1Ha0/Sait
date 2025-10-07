import { useState } from 'react'
import './header.css'
import photo1black from '../assets/logoblakc.png'
import photo2 from '../assets/phone.png'
import { Link } from 'react-router-dom'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='headerB'>
      <nav className='box1B'>
       <Link to = {'/'}><img className='img1' src={photo1black} /></Link>
       <ul className='countkomp'>
        <li>
          <Link to = {'/about'} className='linka'>О компании</Link>
        </li>
        <li>
          <Link to = {'/contract_product'} className='linka'>Контрактное производство</Link>
        </li>
        <li>
          <Link to = {'/own_product'} className='linka'>Собственные торговые марки</Link>
        </li>
        <li>
          <Link to = {'/blog'} className='linka'>Новости</Link>
        </li>
        <li>
           <Link to = {'/contact'} className='linka'>Контакты</Link>
        </li>
       </ul>
       <div className='phB'>
        <img src={photo2} alt="" />
        <p className='phone'>+7 (499) 686-10-14</p>
       </div>
       <button className='kons1B'>Получить консультацию</button>
      </nav>
    </header>
    </>
  )
}
export default Header
