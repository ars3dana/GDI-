import { useEffect, useState } from "react"
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {
  const [nav, setNav] = useState(true)
  const [menuActiv, setMenuActiv] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNav(false)
    } else {
      setNav(true)
    }
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <>
      <div className={!menuActiv ? 'menu' : 'menu_open'}>
            <div onClick={() => setMenuActiv(false)} className={'menu_content'}>
                <a href="#top">
                    <div className='menu_item'>
                        Главная
                    </div>
                </a>
                <a href="#services" className='menu_item'>
                        Услуги 
                </a>
                  <a href="#down" className='menu_item'>
                      Контакты
                  </a>
                  <a href="tel:+996555790037"className="menu_item call">
                    Позвонить
                  </a>
            </div>
        </div>
      <div className={nav ? 'header' : 'header black'}>
          <div className="header__left">
            <div onClick={() => setMenuActiv(!menuActiv)} className={!menuActiv ? ('menu_btn') : ('menu_btn_open')}>
              <div 
              className={!menuActiv ? 
              ('menu_btn_burger') : ('menu_btn_burger_open')}>               
              </div>
            </div>
          </div>
          <div className="header__center">
           <a href="#top"><h1>G D I</h1></a> 
          </div>
          <a href="tel:+996555790037"className="header__right">
              Позвонить
          </a>
      </div>
      <div className="media">
        <video autoPlay loop muted >
          <source src='/back.mp4' type="video/mp4" />
        </video>
      </div>
      <div className="main">
        <div className="title">
          <h2>Мастерская<span>G D I</span></h2>
        </div>
        <div className="about">
        Добро пожаловать к нам !
        Наша мастерская осуществляет диагностику и ремонт бензиновых двигателей Mitsubishi. Наша основная направленность - капитальное и мелко срочное обслуживание двигателей <b>GDI</b>, <b>MPI</b> и <b>MIVEC</b> по которым накоплен огромный опыт.<br/><br/><br/>
        Мы в состоянии устранить самые сложные неисправности систем непосредственного впрыска, за которые не берутся даже официальные дилерские центры. 
        </div>
        <div className="motors">
          <div className="motors__left">
            <img data-aos="fade-right" src="/gdi.jpg" alt=""/>
          </div>
          <div data-aos="fade-left" className="motors__right">
          Gasoline Direct Injection, или же более распространенная аббревиатура GDI, скрывает под собой инжекторную систему подачи топлива для бензиновых двигателей с непосредственным (прямым) впрыском топлива. Конструкция устройств у разных производителей идет под разными аббревиатурами. Mitsubishi (а также KIA и Hyndai) дали название GDI.
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="logo">
          <img data-aos="fade-down-right" src="/logo.jpg" alt="" width="250" height="270"/>
        </div>
        <div data-aos="fade-down-right" className="title">
        Также работаем со всем спектром двигателей Mitsubishi.<br/> Наши инструменты и аппаратные средства позволяют проводить диагностические работы любой сложности.
        </div>

      </div>
      <div className="about_work">
       <h2 id={"services"}>Какие услуги мы предостовляем ?</h2>
        <div className="work_items">
          <div className="work_item">
          <h3>Моторная диагностика</h3>
            <ul>
              <li>Выяснение технического состояния двигателя</li>
              <li>Cостояние головки блока и клапанов</li>
              <li>Cостояние поршневой группы</li>
              <li>Определение места течи жидкостей</li>
              <li>Состояние расходных материалов(фильтры, ремни, свечи...)</li>
              <li>Выяснение работоспособности различных датчиков</li>
              <li>Анализ корректирующих данных с бортового блока управления</li>
            </ul>
          </div>
          <div className="work_item">
            <h3>Техническое обслуживание двигателя</h3>
              <ul>
                <li>Замена ремня ГРМ,роликов,сальников и т.п</li>
                <li>Очистка форсунок от отложений (ультразвук)</li>
                <li>Проверка форсунок и чистка камер сгорания</li>
                <li>Замена масла в двигателе, охлаждающей жидкости</li>
              </ul>
          </div>
        </div>
      </div>  
      <div className="contact">
        <div id="down">
       <h2>Наше расположение</h2>
       <div className="map">
         <h3>Город Бишкек, ул. Айни 34</h3>
         <a href="https://2gis.kg/bishkek/firm/70000001022066825">Нажми сюда</a>
         <span>Чтобы найти нас в 2GIS</span>
       </div>
         <h2>+996 555 79 00 37</h2>
          
        </div>
      </div>
    </>
  )
}
