import { Product } from "../../types";

import styled from "styled-components";

const ProductItem = ({ category, description, id, image, price, rating, title }: Product) => {
  return (
    <ProdItem key={`${category}=${id}`}>
      <ProdCategory>{category}</ProdCategory>
      <p>{description}</p>
      <span>{id}</span>
      <ProdImg>
        <source media="(min-width:650px)" srcSet={image} />
        <source media="(min-width:465px)" srcSet={image} />
        <img src={image} alt={description} />
      </ProdImg>
      <span>{price}</span>
      <span>{rating.rate}</span>
      <p>{title}</p>
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
  font-size: 20px;
`;

export const ProdImg = styled.picture`
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
