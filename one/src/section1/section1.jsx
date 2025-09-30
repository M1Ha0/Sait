import { useState } from 'react'
import './section1.css'

function Section1() {
  const [count, setCount] = useState(0)

  return (
    <main className='sekta'>
      <section className='podsekta'>
      <div className='line1'></div>
      <h1 className='work'>
        СХЕМА РАБОТЫ 
      </h1>
      <nav className='znak1'>
        <div className='cham'>
          <h1>01</h1>
          <div>
            <h3 className='text3'>Знакомство</h3>
            <p className='textmal'>Безусловно, сплочённость команды профессионалов позволяет оценить значение форм воздействия.</p>
            <a className='atext'>——— Оставить заявку</a>
          </div>
        </div>
        <div className='cham'>
          <h1>02</h1>
          <div>
            <h3 className='text3'>Заключение договора</h3>
            <p className='textmal'>Лишь интерактивные прототипы призваны к ответу.</p>
          </div>
        </div>
        <div className='cham'>
          <h1>03</h1>
          <div>
            <h3 className='text3'>Производство</h3>
            <p className='textmal'>А также стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы.</p>
          </div>
        </div>
        <div className='cham'>
          <h1>04</h1>
          <div>
            <h3 className='text3'>Доставка</h3>
            <p className='textmal'>В частности, экономическая повестка сегодняшнего дня говорит о возможностях приоритизации разума над эмоциями.</p>
          </div>
        </div>
      </nav>
    </section>
    </main>
  )
}
export default Section1
