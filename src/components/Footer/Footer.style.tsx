import styled from "styled-components";

const FooterStyle = styled.div`
  padding: 0 48px 48px 48px;
  background: var(--greyscale-50, #FAFAFA);
  @media (max-width: 500px) {
    padding:0;
  }
  .container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
   @media (max-width: 500px) {
   .m-hide{
    display: none;
   }
  }
`;

export default FooterStyle;