import { useState } from 'react'
import './header.css'
import photo1 from '../assets/logo.png'
import photo2 from '../assets/phone.png'
import ikon1  from '../assets/Frame 33.png'
import ikon2  from '../assets/Frame 34.png'
import ikon3  from '../assets/Frame 35.png'
import ikon4  from '../assets/Frame 36.png'
import ikon5  from '../assets/Frame 37.png'
import { Link } from 'react-router-dom'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <nav className='box1'>
       <Link to = {'/'}>
        <img className='img1' src={photo1} />
       </Link>
       <ul className='countkomp'>
        <li>
          <Link to = {'about'} className='linka'>О компании</Link>
        </li>
        <li>
          <a className='komp'>Контрактное производство</a>
        </li>
        <li>
          <a className='komp'>Собственные торговые марки</a>
        </li>
        <li>
          <a className='komp'>Новости</a>
        </li>
        <li>
          <a className='komp'>Контакты</a>
        </li>
       </ul>
       <div className='ph'>
        <img src={photo2} alt="" />
        <p className='phone'>+7 (499) 686-10-14</p>
       </div>
       <button className='kons'>Получить консультацию</button>
      </nav>
      <div className='line'></div>
      <div className='contm'>
        <h1 className='texttop'>КОМПЛЕКСНОЕ ОБЕСПЕЧЕНИЕ ТОВАРАМИ И РАСХОДНЫМИ МАТЕРИАЛАМИ БИЗНЕСА</h1>
        <p className='textbot'>Высокий уровень вовлечения представителей целевой аудитории является четким
          доказательством простого факта: высококачественный прототип будущего проекта
          напрямую зависит от анализа существующих паттернов поведения.</p>
         <button className='kons'>Подробнее о компании</button> 
      </div>
      <footer className='fot1'>
        <div className='rabbox'>
          <img src={ikon1} alt="" />
          <p className='textfot'>Непрерывная работа 
            c 2017 года</p>
        </div>
        <div className='rabbox'>
          <img src={ikon2} alt="" />
          <p className='textfot'> Вся продукция
            сертифицирована</p>
        </div>
        <div className='rabbox'>
          <img src={ikon3} alt="" />
          <p className='textfot'>Контроль качества
            на всех этапах</p>
        </div>
        <div className='rabbox'>
          <img src={ikon4} alt="" />
          <p className='textfot'> Возможны поставки
            по всей России</p>
        </div>
        <div className='rabbox'>
          <img src={ikon5} alt="" />
          <p className='textfot'>Оперативное
            производство</p>
        </div>
      </footer>
    </header>
    </>
  )
}
export default Header
