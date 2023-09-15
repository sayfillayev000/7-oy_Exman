import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo, Photo } from "../../../assets/images/svg";
import { Chiqish } from "../../../assets/react-icons";
const index = memo(() => {
  const [modal, setModal] = useState(false);
  return (
    <header className="header">
      {modal ? (
        <div className="buyurtma__modali">
          <Chiqish className="chiqish" />
          <h1>Buyurtma qilish</h1>
          <form className="madal__form">
            <label className="modal__labal" htmlFor="Ismingizni">
              <input
                className="Ismingizni"
                type="Ism"
                id="Ismingizni"
                placeholder="Ismingizni yozing"
              />
            </label>
            <label className="modal__labal__raqam" htmlFor="tel">
              <span className="">+998</span>
              <input type="tel" id="tel" placeholder="Raqamingizni yozing" />
            </label>
            <label className="modal__section" htmlFor="tel">
              <span> Mahsulotlarni toifasini tanlang</span>
              <select name="" id="">
                <option value=""></option>
                <option value="">Ortopedik shifobaxsh matras</option>
              </select>
            </label>
            <label htmlFor="">
              <button>-</button>
              <span>count</span>
              <button>+</button>
            </label>
          </form>
        </div>
      ) : (
        "avsus"
      )}

      <div className="container header__container">
        <nav className="header__nav__top">
          <NavLink className="header__nav__list">Katalog</NavLink>
          <NavLink className="header__nav__list">Aksiya</NavLink>
          <NavLink className="header__nav__list">Biz haqimizda</NavLink>
          <NavLink className="header__nav__list">Manzilimiz</NavLink>
          <NavLink className="header__nav__list">Aloqa</NavLink>
        </nav>
        <div className="header__botton">
          <Logo />
          <div className="header__left">
            <div className="header__tel">
              <Photo />
              <span>+998 90 123 45 67</span>
            </div>
            <button
              onClick={() => setModal(true)}
              className="header__button"
              type="button"
            >
              Buyurtma berish
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});

export default index;
