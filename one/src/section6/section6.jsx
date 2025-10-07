import { useState } from 'react'
import './section6.css'
import arl from '../assets/arrow.png'
import arr from '../assets/arrow (1).png'
import { Link } from 'react-router-dom'

function Section6() {
  const [count, setCount] = useState(0)

  return (
    <main className='blog' >
      <section className='podblog' >
        <div className='line1'></div>
        <h1 className='work'>БЛОГ ЭКСПЕРТОВ В ОБЛАСТИ ПРОИЗВОДСТВА</h1>
        <nav className='modernbox'>
          <div className='mbox1'>
            <Link to = {'/blog_more'}  className='text31'>Современная методология разработки одухотворила всех причастных</Link>
            <p className='textmal'>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
          </div>
          <div className='mbox2'>
            <h3 className='text3'>Сложно сказать, почему жизнь прекрасна</h3>
            <p className='textmal'>Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</p>
          </div>
        </nav>
        <footer className='modernbot'>
          <a className='atext'>———  Весь блог</a>
          <div className='countblue'>
            <button className='blue'><img src={arl} alt="" /></button>
            <button className='blue'><img src={arr} alt="" /></button>
          </div>
        </footer>
      </section>
    </main>
  )
}
export default Section6
