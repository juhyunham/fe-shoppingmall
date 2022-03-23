import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/products/detail";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { GET_PRODUCT, Product } from "../../graphql/products";

import styled from "styled-components";

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () => graphqlFetcher(GET_PRODUCT, { id }));

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
