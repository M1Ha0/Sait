import { useState } from 'react'
import './section7.css'
import balon from '../assets/Frame 48.png'
import sheld from '../assets/shield.png'

function Section7() {
  const [count, setCount] = useState(0)

  return (
    <main className='balon'>
      <section className='balonjr' > 
        <img src={balon} alt="" />
        <nav className='cauntbalon'>
          <h1 className='work'>ХОТИТЕ СОТРУДНИЧАТЬ?</h1>
          <p className='textmal'>Оставьте заявку, наш менеджер свяжется с Вами в ближайшее время ответит на все интересующие вопросы и поможем даже в самых сложных случаях!</p>
          <div className='countin'>
            <input placeholder="Имя" className='name' type="text" />
                    <input className='' type="text"  class="iphone" 
                           placeholder="+_ (___) __-__-___" 
                           maxlength="18"/>
          </div>
          <div className='malbalon'>
            <button className='kons'>Отправить заявку</button>
            <img src={sheld} alt="" />
            <p className='textmal'>Обращаясь к нам вы получаете не только профессиональную работу, но и абсолютную конфиденциальность информации!</p>
          </div>
        </nav>
      </section>
    </main>
  )
}
export default Section7
