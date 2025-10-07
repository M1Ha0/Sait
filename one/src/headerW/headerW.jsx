import { useState } from 'react'
import './headerW.css'
import photo1 from '../assets/logo.png'
import photo2 from '../assets/phone.png'
import { Link } from 'react-router-dom'

function HeaderW() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='headerW'>
      <nav className='box1'>
       <Link to = {'/'}><img className='img1' src={photo1} /></Link>
       <ul className='countkomp'>
        <li>
          <Link to = {'/about'} className='linkaW'>О компании</Link>
        </li>
        <li>
          <Link to = {'/contract_product'} className='linkaW'>Контрактное производство</Link>
        </li>
        <li>
          <Link to = {'/own_product'} className='linkaW'>Собственные торговые марки</Link>
        </li>
        <li>
          <Link to = {'/blog'} className='linkaW'>Новости</Link>
        </li>
        <li>
          <Link to = {'/contact'} className='linkaW'>Контакты</Link>
        </li>
       </ul>
       <div className='ph'>
        <img src={photo2} alt="" />
        <p className='phone'>+7 (499) 686-10-14</p>
       </div>
       <button className='kons1'>Получить консультацию</button>
      </nav>
    </header>
    </>
  )
}
export default HeaderW
