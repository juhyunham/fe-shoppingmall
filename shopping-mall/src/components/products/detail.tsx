import React from "react";

import styled from "styled-components";
import { Product } from "../../graphql/products";

const ProductDetail = ({ item: { id, title, imageUrl, description, price } }: { item: Product }) => {
  return (
    <ProdDetailItem key={id}>
      <ProdDetailTitle>{title}</ProdDetailTitle>
      <ProdDetailImg>
        <source media="(min-width:650px)" srcSet={imageUrl} />
        <source media="(min-width:465px)" srcSet={imageUrl} />
        <img src={imageUrl} alt={description} />
      </ProdDetailImg>
      <ProdDetailPrice>가격: {price}원</ProdDetailPrice>
    </ProdDetailItem>
  );
};

export default ProductDetail;

export const ProdDetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProdDetailCategory = styled.h3`
  font-size: 13px;
  font-weight: normal;
`;

export const ProdDetailTitle = styled.h2`
  font-size: 20px;
`;

export const ProdDetailImg = styled.picture`
  margin: 10px 0;

  img {
    width: 100%;
    height: 500px;
    object-fit: contain;
  }
`;

export const ProdDetailPrice = styled.span`
  font-size: 15px;
`;

export const ProdDetailRate = styled.span`
  font-size: 15px;
`;
