import { useState } from 'react'
import './own_product.css'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import Section7 from '../section7/section7.jsx'
import Section3 from '../section3/section3.jsx'
function Own_product() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <main className='aboute'>
        <section className='glaboute'>
          <div className='aboutcount'>
            <div className='line1'></div>
            <h1 className='work'>СОБСТВЕННЫЕ ТОРГОВЫЕ МАРКИ</h1>
            <div className='countext'>
              <p className='textmal'>Главная ———</p>
              <p className='textblack'>Собственные торговые марки</p>
            </div>
          </div>
        </section>
    </main>
    <Section3/>
    <Section7/>
    <Footer/> 
    </>       
  )
}
export default Own_product
