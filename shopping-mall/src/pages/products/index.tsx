import { useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types";
import ProductItem from "../../components/products/item";
import styled from "styled-components";
import GET_PRODUCTS, { PRODUCTS } from "../../graphql/products";

const ProductList = () => {
  const { data } = useQuery<PRODUCTS>(QueryKeys.PRODUCTS, () => graphqlFetcher(GET_PRODUCTS));

  console.log(data);

  return (
    <ProdListWrap>
      <ProdListTitle>상품 목록</ProdListTitle>
      <ProdList>
        {data?.products.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ProdList>
    </ProdListWrap>
  );
};

export default ProductList;

export const ProdListWrap = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const ProdListTitle = styled.h2`
  margin: 20px 0;
`;

export const ProdList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
`;
