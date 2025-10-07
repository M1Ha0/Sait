import { useState } from 'react'
import './product_avtohim.css'
import Header from '../header/header.jsx'
import Footer from '../footer/footer.jsx'
import Section7 from '../section7/section7.jsx'
import Section5 from '../section5/section5.jsx'
import Section2 from '../section2/section2.jsx'
import Section1 from '../section1/section1.jsx'
import { arrayTEXT } from '../arrayTEXT.js'
import avtohim from '../assets/avto-him (1).png'
import zal from '../assets/Frame 39 (2).png'
import baba from'../assets/Frame 39 (3).png'
import { arrayIMG } from '../arrayIMG.js'
import { arrayRAD } from '../arrayRAD.js'
import { arraySILKA2 } from '../arraySILKA2.js'
function Product_avtohim() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <main className='aboute'>
        <section className='glaboute'>
          <div className='aboutcount'>
            <div className='line1'></div>
            <h1 className='work'>АВТОМОБИЛЬНАЯ ХИМИЯ</h1>
            <div className='countext1'>
              <p className='textmal'>Главная ——— Контрактное производство ———</p>
              <p className='textblack'>Автомобильная химия</p>
            </div>
          </div>
          <img src={avtohim} alt="" />
        </section>
    </main>
<main className='zalisimo'>
  <section className='zalik'>
    <img src={zal} alt="" />
    <div className='doliv'>
      <div className='line1'></div>
      <h1 className='work'> КОНТРАКТНОЕ ПРОИЗВОДСТВО АВТОМОБИЛЬНОЙ ХИМИИ</h1>
      <p className='textmal'>Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость приоритизации разума над эмоциями. Кстати, представители современных социальных резервов неоднозначны и будут описаны максимально подробно.</p>
      <p className='textmal'>Но социально-экономическое развитие напрямую зависит от поставленных обществом задач! Безусловно, постоянный количественный рост и сфера нашей активности предоставляет широкие возможности для системы обучения кадров, соответствующей насущным потребностям. В целом, конечно, выбранный нами инновационный путь обеспечивает широкому кругу (специалистов) участие в формировании своевременного выполнения сверхзадачи. А ещё элементы политического процесса представлены в исключительно положительном свете. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высокотехнологичная концепция общественного уклада создаёт предпосылки для глубокомысленных рассуждений. В своём стремлении повысить качество жизни, они забывают, что дальнейшее развитие различных форм деятельности, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для поставленных обществом задач.</p>
    </div>
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
<main className='ezeA'>
  <section className='podezeA'>
    <div className='doliv'>
      <div className='line1'></div>
      <h1 className='work'>ИЗГОТОВЛЕНИЕ АВТОХИМИИ</h1>
      <p className='textmal'>Но современная методология разработки позволяет оценить значение прогресса профессионального сообщества. Есть над чем задуматься: тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть ассоциативно распределены по отраслям. В своём стремлении повысить качество жизни, они забывают, что дальнейшее развитие различных форм деятельности, а также свежий взгляд на привычные вещи - безусловно открывает новые горизонты для поставленных обществом задач.</p>
      <ul className='listsilka'>
                {arraySILKA2.map(item =>(
                    <li className='lika' key={item.id}>
                      <div className='lisi'>
                        <img src={item.imageA} alt="" />
                        <p className='textsi'>{item.text}</p>
                      </div>
                    </li>   
                  ))}
              </ul>
    </div>
    <img src={baba} alt="" />
  </section>
</main>
<main className='bigvid'>
  <section className='vid'>
    <div className='line1'></div>
      <h1 className='work'>ВИДЫ АВТОХИМИИ</h1>
      <p className='textmal'>Но современная методология разработки позволяет оценить значение прогресса профессионального сообщества. Есть над чем задуматься: тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть ассоциативно распределены по отраслям.</p>
 <ul className='vidautoH'>
        <li><p>Антискотч</p></li>
        <li><p>Многоцелевая смазка</p></li>
        <li><p>Жидкий ключ</p></li>
        <li><p>Высокотемпературная смазка</p></li>
        <li><p>Универсальный очиститель деталей</p></li>
        <li><p>Силиконовая смазка</p></li>
        <li><p>Цепная смазка</p></li>
        <li><p>Медная смазка</p></li>
        <li><p>Графитовая смазка
</p></li>
        <li><p>Очиститель кондиционера пенный
</p></li>
        <li><p>Очиститель тормозных дисков</p></li>
        <li><p>Очиститель битумных пятен
</p></li>
        <li><p>Очиститель кондционера
</p></li>
        <li><p>Очиститель дросельной заслонки
</p></li>
        <li><p>Очиститель обивки 
</p></li>
        <li><p>Тефлоновая смазка</p></li>
        <li><p>Очиститель двигателя
</p></li>
        <li><p>Универсальный очиститель
</p></li>
        <li><p>Чернитель шин 
</p></li>
        <li><p>Чернитель шин + очистка
</p></li>
    </ul> 
    </section>
    
</main>
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
    <Section1/>
    <Section2/>
    <Section5/>
    <Section7/>
    <Footer/> 
    </>       
  )
}
export default Product_avtohim
