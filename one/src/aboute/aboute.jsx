import { useState } from 'react'
import './aboute.css'

function Aboute() {
  const [count, setCount] = useState(0)

  return (
    <main className='aboute'>
        <section className='glaboute'>
          <div className='aboutcount'>
            <div className='line1'></div>
            <h1 className='work'>О КОМПАНИИ</h1>
            <div className='countext'>
              <p className='textmal'>Главная ———</p>
              <p className='textblack'>О компании</p>
            </div>
          </div>
        </section>
    </main>        
  )
}
export default Aboute
