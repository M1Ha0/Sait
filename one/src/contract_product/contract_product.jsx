import { useState } from 'react'
import './contract_product.css'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import Section7 from '../section7/section7.jsx'
import Section2 from '../section2/section2.jsx'
import load from '../assets/load.png'
function Contract_product() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <main className='aboute'>
        <section className='glaboute'>
          <div className='aboutcount'>
            <div className='line1'></div>
            <h1 className='work'>КОНТРАКТНОЕ ПРОИЗВОДСТВО</h1>
            <div className='countext'>
              <p className='textmal'>Главная ———</p>
              <p className='textblack'>Контрактное производство</p>
            </div>
          </div>
        </section>
    </main>
    <Section2/>
    <main className='zag'>
      <section className='seozag'>
        <h3 className='text3'>SEO Заголовок</h3>
        <p className='textmal'>Также как дальнейшее развитие различных форм деятельности предполагает независимые способы реализации существующих финансовых и административных условий. Каждый из нас понимает очевидную вещь: курс на социально-ориентированный национальный проект играет важную роль в формировании как самодостаточных, так и внешне зависимых концептуальных решений. Внезапно, интерактивные прототипы набирают популярность среди определенных слоев населения, а значит, должны быть...</p>
      <div className='chitat'>
        <img src={load} alt="" />
        <p className='atext'>Читать больше</p>
      </div>
      </section>
    </main>
    <Section7/>
    <Footer/> 
    </>       
  )
}
export default Contract_product
