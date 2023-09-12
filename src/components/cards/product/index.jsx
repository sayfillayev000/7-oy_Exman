import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Matras } from "../../../assets/images/png";
import { Karzinka } from "../../../assets/react-icons";

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
      <section className="cantainer">
        {products.products &&
          products.products.map((item) => (
            <div key={item.id} className="product__card">
              <img src={Matras} className="praduct__img" alt="" />
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
    </section>
  );
};

export default index;
