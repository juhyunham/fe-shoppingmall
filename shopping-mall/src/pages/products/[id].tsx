import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types";

import styled from "styled-components";

const ProductDetail = () => {
  const { id } = useParams();

  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );

  if (!data) return null;

  const { category, title, image, description, price, rating } = data;

  return (
    <ProdDetailItem key={`${category}=${id}`}>
      <ProdDetailCategory>{category}</ProdDetailCategory>
      <ProdDetailTitle>{title}</ProdDetailTitle>
      <ProdDetailImg>
        <source media="(min-width:650px)" srcSet={image} />
        <source media="(min-width:465px)" srcSet={image} />
        <img src={image} alt={description} />
      </ProdDetailImg>
      <ProdDetailPrice>가격: {price}</ProdDetailPrice>
      <ProdDetailRate>평점: {rating.rate}</ProdDetailRate>
    </ProdDetailItem>
  );
};

export default ProductDetail;

export const ProdDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
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
    height: 400x;
    object-fit: contain;
  }
`;

export const ProdDetailPrice = styled.span`
  font-size: 15px;
`;

export const ProdDetailRate = styled.span`
  font-size: 15px;
`;
