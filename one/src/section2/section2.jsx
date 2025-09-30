import { useState } from 'react'
import './section2.css'
import {arrayHIM} from '../arrayHIM.js' 

function Section2() {
  const [count, setCount] = useState(0)

  return (
    <main className='break'>
      <section className='breakjr'>
        <div className='line1'></div>
        <h1 className='work' >КОНТРАКТНОЕ ПРОИЗВОДСТВО</h1>
         <div  className='countbad'>
         {arrayHIM.map(item => (
          <div key={item.id} className='bad'>
              <div className='badmal'>
                <h3 className='text3'>{item.text3}</h3>
                <p className='textmal'>{item.textmal}</p>
              </div>
              <img src={item.image} alt="" />
          </div>
      ))}
</div>
      </section>
    </main>
  )
}
export default Section2