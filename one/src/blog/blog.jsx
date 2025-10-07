import { useState } from 'react'
import './blog.css'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import Section7 from '../section7/section7.jsx'
function Blog() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <main className='aboute'>
        <section className='glaboute'>
          <div className='aboutcount'>
            <div className='line1'></div>
            <h1 className='work'>БЛОГ</h1>
            <div className='countext'>
              <p className='textmal'>Главная ———</p>
              <p className='textblack'>Блог</p>
            </div>
          </div>
        </section>
    </main>
    <main className='veribigcount'>
      <section className='veri'>
        <div className='mbox1'>
            <h3 className='text3'>Современная методология разработки одухотворила всех причастных</h3>
            <p className='textmal'>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
          </div>
          <div className='mbox2'>
            <h3 className='text3'>Сложно сказать, почему жизнь прекрасна</h3>
            <p className='textmal'>Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</p>
          </div>
          <div className='mbox2'>
            <h3 className='text3'>Сложно сказать, почему жизнь прекрасна</h3>
            <p className='textmal'>Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</p>
          </div>
           <div className='mbox1'>
            <h3 className='text3'>Современная методология разработки одухотворила всех причастных</h3>
            <p className='textmal'>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
          </div>
           <div className='mbox1'>
            <h3 className='text3'>Современная методология разработки одухотворила всех причастных</h3>
            <p className='textmal'>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
          </div>
            <div className='mbox2'>
            <h3 className='text3'>Сложно сказать, почему жизнь прекрасна</h3>
            <p className='textmal'>Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</p>
          </div>
            <div className='mbox2'>
            <h3 className='text3'>Сложно сказать, почему жизнь прекрасна</h3>
            <p className='textmal'>Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</p>
          </div>
           <div className='mbox1'>
            <h3 className='text3'>Современная методология разработки одухотворила всех причастных</h3>
            <p className='textmal'>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
          </div>
           <div className='mbox1'>
            <h3 className='text3'>Современная методология разработки одухотворила всех причастных</h3>
            <p className='textmal'>Действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены...</p>
          </div>
           <div className='mbox2'>
            <h3 className='text3'>Сложно сказать, почему жизнь прекрасна</h3>
            <p className='textmal'>Сложно сказать, почему элементы политического процесса функционально разнесены на независимые элементы. Безусловно, высокотехнологичная...</p>
          </div>
      </section>
      <div className='innum'>
        <p className='onenum'>1</p>
        <p className='num'>2</p>
        <p className='num'>3</p>
        <p className='num'>4</p>
        <p className='num'>5</p>
      </div>
    </main>
    <Section7/>
    <Footer/> 
    </>       
  )
}
export default Blog
