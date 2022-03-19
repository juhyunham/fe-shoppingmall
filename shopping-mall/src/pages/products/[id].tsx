import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/products/detail";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types";

import styled from "styled-components";

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );

  if (!data) return null;

  return (
    <ProductDetailWrap>
      <ProductDetailTitle>상품 상세</ProductDetailTitle>
      <ProductDetail item={data} />
    </ProductDetailWrap>
  );
};

export default ProductDetailPage;

export const ProductDetailWrap = styled.h2`
  padding: 20px;
`;

export const ProductDetailTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;
