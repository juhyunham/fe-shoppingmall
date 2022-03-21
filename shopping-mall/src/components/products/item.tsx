import { Link } from "react-router-dom";
import { Product } from "../../graphql/products";
import { cartItemSelector } from "../../recoils/cart";
import { useRecoilState } from "recoil";

import styled from "styled-components";

const ProductItem = ({ description, id, imageUrl, price, title }: Product) => {
  const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  const addToCart = () => setCartAmount((prev) => (prev || 0) + 1);
  return (
    <ProdItem key={id}>
      <Link to={`/products/${id}`}>
        <ProdTitle>{title}</ProdTitle>
        <ProdImg>
          <source media="(min-width:650px)" srcSet={imageUrl} />
          <source media="(min-width:465px)" srcSet={imageUrl} />
          <img src={imageUrl} alt={description} />
        </ProdImg>
        <span>가격: {price}</span>
      </Link>
      <ProdItemAddCart type="button" onClick={addToCart}>
        장바구니 담기
      </ProdItemAddCart>
      <span>{cartAmount || 0}</span>
    </ProdItem>
  );
};

export default ProductItem;

export const ProdItem = styled.li`
  display: flex;
  flex-direction: column;
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
    object-fit: cover;
  }
`;

export const ProdItemAddCart = styled.button`
  display: block;
  margin-top: 5px;
  cursor: pointer;
`;
