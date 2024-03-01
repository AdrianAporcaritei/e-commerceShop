/** @format */

import Container from "@/app/components/Container";
import React from "react";
import ProductDetails from "./productDetails";
import { product } from "@/app/components/utils/product";

interface Iparams {
  productId?: string;
}
const Product = ({ params }: { params: Iparams }) => {
  console.log("params", params);
  return (
    <div className='p-8'>
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
