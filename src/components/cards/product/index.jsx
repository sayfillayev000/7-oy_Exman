import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Kafolat,
  Matras,
  Qollab_quvvatlash,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  Rectangle5,
  Rectangle6,
  Yetkazib_berish,
} from "../../../assets/images/png";
import { Geolokatsiya, Karzinka, Pleyer } from "../../../assets/react-icons";

const index = () => {
  const [products, setProducts] = useState([null]);
  useEffect(() => {
    fetch("http://localhost:1212/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products.categories);
  return (
    <section className="main__card">
      <section className="contianer info__card">
        <div className="main__info">
          <h1 className="main__title">7</h1>
          <h4 className="main__subtitle">yillik tajriba</h4>
        </div>
        <div className="main__info">
          <h1 className="main__title">10k+</h1>
          <h4 className="main__subtitle">mamnun mijozlar</h4>
        </div>
        <div className="main__info">
          <h1 className="main__title">10</h1>
          <h4 className="main__subtitle">yillik kafolat</h4>
        </div>
        <div className="main__info">
          <h1 className="main__title">3</h1>
          <h4 className="main__subtitle">kunda yetkazish</h4>
        </div>
      </section>
      <section className="container product__container">
        <h1 className="product__title">Bizning mahsulotlar</h1>
        <ul className="product__list">
          {products.categories &&
            products.categories.map((item) => (
              <NavLink key={item.id} className="product__category">
                {item.category}
              </NavLink>
            ))}
        </ul>
      </section>
      <div className="line"></div>
      <section className="container">
        {products.products &&
          products.products.map((item) => (
            <div key={item.id} className="product__card">
              <div className="img__btn">
                <button className="yangi__malsulot__btn" type="button">
                  Yangi mahsulot
                </button>
                <img src={Matras} className="praduct__img" alt="" />
              </div>
              <div className="product__info">
                <h1 className="product__name">{item.name}</h1>
                <div className="product__item">
                  <div className="product__box">
                    <span className="product__kg">Yuklama</span>
                    <strong>
                      150<span>kg</span>
                    </strong>
                  </div>
                  <div className="product__box">
                    <span className="product__kg">Kafolat</span>
                    <strong>
                      3<span>yil</span>
                    </strong>
                  </div>
                  <div className="product__box">
                    <span className="product__kg">O’lchami</span>
                    <strong>{item.size}</strong>
                  </div>
                  <div className="product__box">
                    <span className="product__kg">Sig’imi</span>
                    <strong>
                      2<span>kishilik</span>
                    </strong>
                  </div>
                </div>
                <p className="product__pragraph">
                  Penatibus viverra gravida rhoncus in. At turpis morbi ante
                  tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut
                  urna, fermentum. Porttitor senectus lorem rhoncus facilisi ac
                  dictum varius egestas.
                </p>
                <span className="product__sena">Narxi</span>
                <strong className="product__narx">
                  1 699 999 <span>so’m</span>
                </strong>
                <button type="button" className="product__button">
                  <span>Buyurtma berish</span> <Karzinka />
                </button>
              </div>
            </div>
          ))}
      </section>
      <h1 className="ishlab__chiqish__title">
        Ishlab chiqarish texnologiyalari
      </h1>
      <section className="container ishlab__chiqish">
        <div className="ishlab__chiqish__card">
          <h1 className="subtitle">Memoriform</h1>
          <img src={Rectangle1} alt="" />
          <Pleyer className="Pleyer" />
          <p className="ishlab__chiqish__paragrif">
            Lectus pellentesque senectus elit donec massa ipsum ultricies dui.
            Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
          </p>
        </div>
        <div className="ishlab__chiqish__card">
          <h1 className="subtitle">Tabiiy lateks</h1>
          <img src={Rectangle2} alt="" />
          <Pleyer className="Pleyer" />
          <p className="ishlab__chiqish__paragrif">
            Lectus pellentesque senectus elit donec massa ipsum ultricies dui.
            Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
          </p>
        </div>
        <div className="ishlab__chiqish__card">
          <h1 className="subtitle">Mustaqil prujina</h1>
          <img src={Rectangle3} alt="" />
          <Pleyer className="Pleyer" />
          <p className="ishlab__chiqish__paragrif">
            Lectus pellentesque senectus elit donec massa ipsum ultricies dui.
            Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.
          </p>
        </div>
      </section>
      <section className="container Dream__container">
        <div className="Dream">
          <div className="Dream__card">
            <h1 className="Dream__title">Dream Cloud kompaniyasi haqida</h1>
            <p className="Dream__paragraf">
              Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor
              a est. Habitant adipiscing ut sed pulvinar tellus, ut urna,
              fermentum:
            </p>
            <ul className="Dream__list">
              <li className="list__item">
                Penatibus viverra gravida rhoncus in.
              </li>
              <li className="list__item">
                Dolor integer in interdum viverra risus dolor enim.
              </li>
              <li className="list__item">
                Turpis senectus eu, eget aenean nulla pellentesque sed ut
                tempor.
              </li>
            </ul>
          </div>
          <div className="img__card">
            <Pleyer className="player76" />
            <img className="img__komnata" src={Rectangle4} alt="" />
          </div>
        </div>
        <div className="Dream2">
          <img className="img__kuxniya" src={Rectangle5} alt="" />
          <div className="Dream__card2">
            <h3 className="Dream__title2">
              Libero erat praesent ullamcorper eget tortor sed et. Nec id
              lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer sed
              vulputate sed nec. Arcu id mattis erat et id.{" "}
            </h3>
            <ol className="Dream__list2">
              <li className="list__item2">
                Penatibus viverra gravida rhoncus in.
              </li>
              <li className="list__item2">
                Dolor integer in interdum viverra risus dolor enim.
              </li>
              <li className="list__item2">
                Turpis senectus eu, eget aenean nulla pellentesque sed ut
                tempor.
              </li>
            </ol>
            <p className="Dream__paragraf2">
              Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus
              accumsan est elementum feugiat arcu mauris tincidunt. Eget
              faucibus pharetra et luctus eget ut fames. A cursus elementum
              egestas eu scelerisque id.
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <h1 className="naga__biz__title">Nega bizni tanlashadi</h1>
        <div className="nega__biz">
          <div className="nagaBiz__card">
            <img src={Yetkazib_berish} alt="" />
            <h2 className="Yetkazib__berish__title">Yetkazib berish</h2>
            <p className="Yetkazib__berish__paragraf">Toshkent bo'ylab bepul o'lchov va etkazib berish</p>
          </div>
          <div className="nagaBiz__card">
            <img src={Qollab_quvvatlash} alt="" />
            <h2 className="quvvatlash__title">Qo'llab-quvvatlash</h2>
            <p className="quvvatlash__paragraf">Bizning qo'llab-quvvatlash xizmati sizga har qanday savolda yordam beradi va menejerlarning </p>
            <span className="tel">+998 97 144-24-42</span>
          </div>
          <div className="nagaBiz__card">
            <img src={Kafolat} alt="" />
            <h2 className="Kafolat__title">Kafolat</h2>
            <p className="Kafolat__paragraf">Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar matras kamida 25 mm qisqartirilsa.</p>
          </div>
        </div>
        <div className="Manzilimiz">
          <div className="Manzilimiz__card">
            <h1>Manzilimiz</h1>
            <h2>Toshkent, Parkent ko'chasi, 176-uy</h2>
            <p>Mo’ljal: Qoraqamish 2/1, Tursunxodjayeva ro’parasi, Milliy bog’ metro bekati.</p>
            <Link className="geolokatsiya" target="_black">
            <Geolokatsiya/>
           <span> Geolokatsiya</span>
            </Link>
          </div>
          <img src={Rectangle6} alt="" />
        </div>
      </section>
    </section>
  );
};

export default index;
