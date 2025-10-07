import { useState } from 'react'
import './contact.css'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import Section7 from '../section7/section7.jsx'
import mart  from '../assets/mark.png'
import mail1  from '../assets/mail (1).png'
import vk from '../assets/vk.png'
import inst from '../assets/inst.png'
import map from '../assets/map.png'
function Contact() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <main className='aboute'>
        <section className='glaboute'>
          <div className='aboutcount'>
            <div className='line1'></div>
            <h1 className='work'>КОНТАКТЫ</h1>
            <div className='countext'>
              <p className='textmal'>Главная ———</p>
              <p className='textblack'>Контакты</p>
            </div>
          </div>
        </section>
    </main>
    <main className='map'>
      <section className='podmap'>
      <nav className='fotnmap'>
              <a className='bigph'>+7 (499) 686-10-14</a>
              <div className='boxlogo'>
                <img src={mart} alt="" />
                <p>г. Мосвка, Холодильный пер. 4к1с8</p>
              </div>
              <div className='boxlogo'>
                <img src={mail1} alt="" />
                <p>a.dragunov@tdaliance.ru</p>
              </div>
              <div className='socseti'>
                <img src={vk} alt="" />
                <img src={inst} alt="" />
              </div>
            </nav>
            <img src={map} alt="" />
        </section>
    </main>
    <Section7/>
    <Footer/> 
    </>       
  )
}
export default Contact
