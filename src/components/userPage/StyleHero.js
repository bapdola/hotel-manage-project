import styled from "styled-components";
import defaultImg from "../../images/room-1.jpeg";
const StyledHero = styled.header`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url("../images/defaultBcg.jpeg");
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
