import { useQuery } from "react-query";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import ProductItem from "../../components/products/item";
import styled from "styled-components";
import GET_PRODUCTS, { Products } from "../../graphql/products";

const ProductList = () => {
  const { data } = useQuery<Products>(QueryKeys.PRODUCTS, () => graphqlFetcher(GET_PRODUCTS));

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

export const ProdListWrap = styled.div``;

export const ProdListTitle = styled.h2`
  margin: 20px 0;
`;

export const ProdList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 0 10px;
`;
