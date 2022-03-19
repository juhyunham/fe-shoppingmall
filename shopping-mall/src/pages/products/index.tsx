import { useQuery } from "react-query";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types";
import ProductItem from "../../components/products/item";
import styled from "styled-components";

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  console.log(data);

  return (
    <ProdListWrap>
      <ProdList>
        {data?.map((product) => (
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

export const ProdList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
