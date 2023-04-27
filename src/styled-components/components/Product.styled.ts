import styled from "styled-components";

type PropsType = {
  num: number;
};

const Product = styled.div`
  flex-direction: column;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: ${(props: PropsType) =>
      props.num % 2 == 0 ? "row" : "row-reverse"};
    justify-content: space-between;
  }
`;

export default Product;
