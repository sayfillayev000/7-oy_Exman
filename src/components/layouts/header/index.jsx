import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Logo , Photo } from "../../../assets/images/svg";
const index = memo(() => {
  return (
    <header className="header">
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
          <div className='header__left'>
            <div className='header__tel' >
              <Photo/>
              <span>+998 90 123 45 67</span>
            </div>
            <button className="header__button" type="button">Buyurtma berish</button>
          </div>
        </div>
      </div>
    </header>
  );
});

export default index;
