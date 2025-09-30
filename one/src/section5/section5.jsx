import { useState } from 'react'
import './section5.css'
import burgerzvet from '../assets/Burger_King.png'
import kolba from '../assets/him.png'
import burger from '../assets/BurgerKingS.png'

function Section5() {
  const [count, setCount] = useState(0)

  return (
    <main className='air'>
      <section className='podair'>
        <div className='line1'></div>
        <nav className='mac'> 
          <div className='leftking'>
            <h1 className='work'>ПРОИЗВОДИМ АЭРОЗОЛЬНУЮ ПРОДУКЦИЮ ДЛЯ РАЗНЫХ СФЕР</h1>
            <div className='counul'>
            <ul className='listbk'>
              <li className='listik1'>
                <p>Химические производства</p>
              </li>
              <li className='listik2'>
                <p>Автомойки</p>
              </li>
              <li className='listik3'>
                <p>Пищевая продукция</p>
              </li>
              <li className='listik4'>
                <p>Лаки и краски</p>
              </li>
              <li className='listik5'>
                <p>Косметические средства</p>
              </li>
            </ul>
            <ul className='listbk'>
              <li className='listik6'>
                <p>Автомобильная косметика</p>
              </li>
              <li className='listik7'>
                <p>Косметика по уходу за одеждой</p>
              </li>
              <li className='listik8'>
                <p>Косметика по уходу за обувью</p>
              </li>
              <li className='listik9'>
                <p>Строительные материалы</p>
              </li>
              <li className='listik10'>
                <p>И многих других</p>
              </li>
            </ul>
            </div>
          </div>
          <div className='rightking'>
            <div className='burger1'>
              <img className='hoverking1' src={burger} alt="" />
              <img className='king1' src={burgerzvet} alt="" />
            </div>
            <div className='burger2'>
              <img className='hoverking2' src={burger} alt="" />
              <img className='king2' src={burgerzvet} alt="" />
            </div>
            <div className='burger3'>
              <img className='hoverking3' src={burger} alt="" />
              <img className='king3' src={burgerzvet} alt="" />
            </div>
            <div className='burger4'>
              <img className='hoverking4' src={burger} alt="" />
              <img className='king4' src={burgerzvet} alt="" />
            </div>
            <div className='burger5'>
              <img className='hoverking5' src={burger} alt="" />
              <img className='king5' src={burgerzvet} alt="" />
            </div>
            <div className='burger6'>
              <img className='hoverking6' src={burger} alt="" />
              <img className='king6' src={burgerzvet} alt="" />
            </div>
            <div className='burger7'>
              <img className='hoverking7' src={burger} alt="" />
              <img className='king7' src={burgerzvet} alt="" />
            </div>
            <div className='burger8'>
              <img className='hoverking8' src={burger} alt="" />
              <img className='king8' src={burgerzvet} alt="" />
            </div>
            <div className='burger9'>
              <img className='hoverking9' src={burger} alt="" />
              <img className='king9' src={burgerzvet} alt="" />
            </div>
          </div>
        </nav>
      </section>
    </main>
  )
}
export default Section5
