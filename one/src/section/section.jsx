import { useState } from 'react'
import './section.css'
import photo1 from '../assets/logo.png'
import photo2 from '../assets/phone.png'
import ikon1  from '../assets/Frame 33.png'
import ikon2  from '../assets/Frame 34.png'
import ikon3  from '../assets/Frame 35.png'
import ikon4  from '../assets/Frame 36.png'
import ikon5  from '../assets/Frame 37.png'
import { Link } from 'react-router-dom'

function Section() {
  const [count, setCount] = useState(0)

  return (
    <>

    <section className='header'>
      <Header/>
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
    </section>
    </>
  )
}
export default Section
