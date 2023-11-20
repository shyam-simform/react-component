import styled from "styled-components";

const HeaderStyle = styled.div`
  max-width: 456px;
  height: calc(100vh -173px);
  margin-bottom: 2rem;

  h3 {
    color: var(--greyscale-900, #1a202c);
    text-align: center;
    font-family: Manrope;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 125%; /* 40px */
    letter-spacing: 0.2px;
    margin-bottom: 16px;
  }

  .reason-text {
    color: var(--greyscale-600, #718096);
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
    margin-bottom: 20px;
  }
`;

export default HeaderStyle;
