import { useState } from 'react'
import './aboute.css'
import Header from '../header/header'
import Footer from '../footer/footer'
import Section7 from '../section7/section7'
import Section5 from '../section5/section5'
import Section4 from '../section4/section4'
import { arrayTEXT } from '../arrayTEXT.js'
import { arrayRAD } from '../arrayRAD.js'
import { arraySILKA } from '../arraySILKA.js'
import { arrayIMG } from '../arrayIMG.js'
function Aboute() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
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
    <main className='miexpert'>
    <section className='expert'>
      {arrayTEXT.filter(item => item.id === 1).map(item =>(
    <div className='expert' key={item.id}>
      <img className='' src={item.image1} alt="" />
      <div className='razopit'>
        <div className='line1'></div>
        <h1 className='work'>{item.work}</h1>
        <p className='textmal'>{item.textmal1}</p>
      </div>
    </div>
))}
    
    </section>
    <div className='fot1'>
      {arrayRAD.map(item =>(
        <div key={item.id} className='rabbox'>
                <img src={item.imageA} alt="" />
                <p className='textfot1'>{item.textfotA}</p>
              </div>
      ))}
    </div>
    </main>
    <main className='nashe'>
      <section className='podnashe'>
        {arrayTEXT.filter(item => item.id === 2).map(item =>(
    <div className='podnashe' key={item.id}>
      <div className='nash'>
        <div className='line1'></div>
        <h1 className='work'>{item.work}</h1>
        <p className='textmal'>{item.textmal1}</p>
        <p className='textmal'>{item.textmal2}</p>
        <ul className='listsilka'>
          {arraySILKA.map(item =>(
              <li className='lika' key={item.id}>
                <div className='lisi'>
                  <img src={item.imageA} alt="" />
                  <p className='textsi'>{item.text}</p>
                </div>
              </li>   
            ))}
        </ul>
      </div>
      <img className='' src={item.image1} alt="" />
    </div>
))}
      </section>
    </main>
    <Section4/>
<main className='is'>
  <section className='podis'>
    {arrayTEXT.filter(item => item.id === 3).map(item =>(
    <div className='podis' key={item.id}>
        <div className='line1'></div>
        <h1 className='work'>{item.work}</h1>
        <div className='pod21'>
        <p className='textmal'>{item.textmal1}</p>
        <p className='textmal'>{item.textmal2}</p>
      </div>
    </div>
))}
</section>
<div className='counIMG'>
{arrayIMG.map(item =>(
  <div key={item.id}>
    <img src={item.kartinka} alt="" />
  </div>
))}
  </div>
  
</main>
    <Section5/>
    <Section7/>
    <Footer/> 
    </>       
  )
}
export default Aboute
