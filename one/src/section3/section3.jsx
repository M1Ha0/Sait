import { useState } from 'react'
import './section3.css'
import ikonagt from '../assets/AGTECH.png'
import ikonagt1 from '../assets/AGTECH (1).png'
import ap from '../assets/AP (1).png'
import ap1 from '../assets/AP.png'
function Section3() {
  const [count, setCount] = useState(0)

  return (
    <main className='torg'>
      <section className='podtorg'>
        <div className='line1'></div>
        <h1 className='work' >СОБСТВЕННЫЕ ТОРГОВЫЕ МАРКИ</h1>
        <nav className='autos'>
          <div className='autosjr'>
            <img src={ikonagt} className='stand1' alt="" />
            <img src={ikonagt1} className='hover1' alt="" />
            <div className='slimautos'>
              <h3 className='text3'>Автохимия AG-Tech</h3>
              <p className='textmal'>Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.</p>
            </div>
          </div>
          <div className='autosjr1'>
            <img src={ap} className='stand' alt="" />
            <img src={ap1} className='hover' alt="" />
            <div className='slimautos'>
              <h3 className='text3'>Автохимия AP</h3>
              <p className='textmal'>Для современного мира разбавленное изрядной долей эмпатии, рациональное мышление создаёт предпосылки для поставленных обществом задач.</p>
            </div>
          </div>
        </nav>
      </section>
    </main>
  )
}
export default Section3