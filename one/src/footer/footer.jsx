import { useState } from 'react'
import './footer.css'
import mart  from '../assets/mark.png'
import mail1  from '../assets/mail (1).png'
import vk from '../assets/vk.png'
import inst from '../assets/inst.png'
import logoB from '../assets/logoB.png'
import ruso from '../assets/Group 48.png'
import { Link } from 'react-router-dom'
function Footer() {
  const [count, setCount] = useState(0)

  return (
    <footer className='end'>
      <nav className='fotn'>
         <Link to = {'/'}><img src={logoB} alt="" /></Link>
        <a className='bigph'>+7 (499) 686-10-14</a>
        <div className='boxlogo'>
          <img src={mart} alt="" />
          <p>г. Мосвка, Холодильный пер. 4к1с8</p>
        </div>
        <div className='boxlogo'>
          <img src={mail1} alt="" />
          <p>a.dragunov@tdaliance.ru</p>
        </div>
        <div className='socseti'>
          <img src={vk} alt="" />
          <img src={inst} alt="" />
        </div>
      </nav>
      <div className='silka'>
        <ul className='silkaul'>
          <li className='lishka'>
            <Link to = {'/contract_product'} className='linkfo'>Контрактное производство</Link>
          </li>
          <li className='silkali'>
            <Link to = {'/product_avtohim'} className='linkfom'>Автомобильная химия</Link>
          </li>
          <li className='silkali'>
            <a >Бытовая химия</a>
          </li>
          <li className='silkali'>
            <a >Дезинфицирующие средства</a>
          </li>
        </ul>
        <ul className='silkaul'>
          <li className='lishka'>
            <a ></a>
          </li>
          <li className='silkali'>
            <a >Пищевые аэрозоли</a>
          </li>
          <li className='silkali'>
            <a >Косметическая продукция </a>
          </li>
          <li className='silkali'>
            <a >Краски аэрозольные</a>
          </li>
        </ul>
        <ul className='silkaul'>
          <li className='lishka'>
            <Link to = {'/own_product'} >Собственные марки </a>
          </li>
          <li className='silkali'>
           <Link to = {'/product_agtech'} className='linkfom'>Автохимия AG-Tech</Link>
          </li>
          <li className='silkali'>
            <a >Автохимия AP</a>
          </li>
          <li className='silkali'>
            <a ></a>
          </li>
        </ul>
        <ul className='silkaul'>
          <li className='lishka'>
            <Link to = {'/about'} className='linkfo'>О компании</Link>
          </li>
          <li className='lishka'>
            <Link to = {'/blog'}  className='linkfo'>Новости</Link>
          </li>
          <li className='lishka'>
            <Link to = {'/contact'} className='linkfo'>Контакты</Link>
          </li>
          <li className='lishka'>
            <a ></a>
          </li>
        </ul>
      </div>
    <div className='ending'>
      <div className='finlcount1'>
        <a >© 2022 «Aliance Production». Все права защищены.</a>
        <Link to = {'/politics'}>Политики конфиденциальности</Link>
      </div>
      <div className='finlcount2'>
        <p>Сделано в</p>
        <img src={ruso} alt="" />
      </div>
    </div>
    </footer>
  )
}
export default Footer
