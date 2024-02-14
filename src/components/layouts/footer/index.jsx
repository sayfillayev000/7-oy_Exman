import { memo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Fecebook, Top, Twitter, Vk, YouTube } from "../../../assets/react-icons";
import { Abutech } from "../../../assets/images/svg";

const index = memo(() => {
  const refValue = useRef('')
  const [val, setVal] = useState(false);
  const hendleSubmit = (e) =>{
    e.preventDefault()
   if (refValue.current.value > 5) {
    setVal(true)
   };
}
  return (
    <footer>
      <div className="footer">
        <div 
       
        style={{display: `${val ? "none":"flex"}`}} 
        className='container footer__container'>
          <div className="footer__left">
            <h1>Sizni qiziqtirdimi?</h1>
            <h6>Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz</h6>
          </div>
          <form onSubmit={hendleSubmit} className="footer__form">
            <label className="footer__label" htmlFor="tel">
              <span className="TEL__KOD">+998</span>
              <span className="label__line"></span>
              <input ref={refValue} type="tel" id="tel" placeholder="Raqamingizni yozing" />
            </label>
            <button className="footer__button">
              Yuborish
            </button>
          </form>
        </div>
        <div
         style={{display: `${val ? "block" : "none"}`}}
         className="container ariza__qabul__qilindi"
         >
          <h1 className="Arizangiz__title">Arizangiz muvaffaqiyatli qabul qilindi ✅</h1>
          <p  className="Arizangiz__subtitle">Siz bilan tez orada bog’lanamiz 😊</p>
        </div>
      </div>
      <div className="container footer__bottom">
     <div className="footer__card">
     <ul className="footer__list">
          <Link>Biz haqimizda</Link>
          <Link>Katalog</Link>
          <Link>Aksiya</Link>
          <Link>Manzilimiz</Link>
        </ul>
       <ul className="footer__icon__list">
        <li><Fecebook/></li>
        <li><Twitter/></li>
        <li><Vk/></li>
        <li><YouTube/></li>
       </ul>
     </div>
     <div className="container footer__line"></div>
     <div className="footer__bot">
      <p>© 2021 Dream Cloud. Barcha huquqlar himoyalangan.</p>
      <Top/>
      <Abutech/>
     </div>
      </div>
    </footer>
  );
});

export default index;
