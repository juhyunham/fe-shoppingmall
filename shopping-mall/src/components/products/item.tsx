import { Product } from "../../types";
import { Link } from "react-router-dom";

import styled from "styled-components";

const ProductItem = ({ category, description, id, image, price, rating, title }: Product) => {
  return (
    <ProdItem key={`${category}=${id}`}>
      <Link to={`/products/${id}`}>
        <ProdCategory>{category}</ProdCategory>
        <ProdTitle>{title}</ProdTitle>
        <ProdImg>
          <source media="(min-width:650px)" srcSet={image} />
          <source media="(min-width:465px)" srcSet={image} />
          <img src={image} alt={description} />
        </ProdImg>
        <span>가격: {price}</span>
        <span>평점: {rating.rate}</span>
      </Link>
    </ProdItem>
  );
};

export default ProductItem;

export const ProdItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #212121;
  border-radius: 10px;
`;

export const ProdCategory = styled.h3`
  font-size: 12px;
  font-weight: normal;
`;

export const ProdTitle = styled.h2`
  font-size: 16px;
`;

export const ProdImg = styled.picture`
  margin: 10px 0;

  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }
`;
