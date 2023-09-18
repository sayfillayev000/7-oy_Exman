import React, { memo } from "react";
import { Footer, Header } from "../../components/layouts";
import { Hero, Product } from "../../components/cards";

const index = memo(() => {
  return (
    <>
      <Hero />
      <Product />
    </>
  );
});

export default index;
