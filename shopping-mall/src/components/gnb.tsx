import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const gnbItem = ["홈", "상품목록", "장바구니"];

const Gnb = () => {
  const [clickIndex, setClickIndex] = useState(-1);

  return (
    <GnbNav className="gnb">
      <GnbList>
        {gnbItem.map((item, index) => {
          return (
            <GnbItem
              key={index}
              className={index === clickIndex ? "active" : ""}
              onClick={() => {
                setClickIndex(index);
              }}
            >
              {index === 0 && <Link to="/">{item}</Link>}
              {index === 1 && <Link to="/products">{item}</Link>}
              {index === 2 && <Link to="/cart">{item}</Link>}
            </GnbItem>
          );
        })}
      </GnbList>
    </GnbNav>
  );
};

export default Gnb;

export const GnbNav = styled.nav`
  border-bottom: 1px solid #333;
`;

export const GnbList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const GnbItem = styled.li`
  flex: 1;
  width: 100%;
  background-color: #333;
  color: #fff;

  a {
    display: block;
    padding: 10px;
    text-align: center;
  }

  &.active {
    background-color: #f1f2f3;
    color: #333;
    font-weight: bold;
  }
`;
