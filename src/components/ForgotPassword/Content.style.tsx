import styled from "styled-components";

const ContentStyle = styled.div`
  height: calc(100vh - 74px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--greyscale-50, #FAFAFA);

  .container {
    border-radius: 16px;
    width: 510px;
    height: auto;
    padding: 40px;
    border-radius: 16px;
    background: var(--others-white, #fff);

    box-shadow: 0px 16px 24px 0px rgba(93, 106, 131, 0.02);
  }

  .title {
    color: #1a202c;
    font-size: 32px;
    font-family: Manrope;
    font-weight: 800;
    line-height: 40px;
    letter-spacing: 0.2px;
    word-wrap: break-word;
    padding-bottom: 16px;
  }

  .body {
    color: #718096;
    font-size: 16px;
    font-family: Manrope;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.2px;
    word-wrap: break-word;
    padding-bottom: 40px;
  }

  input {
    display: flex;
    width: 100%;
    height: 56px;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 40px;
  }

  .send-link-btn {
    color: white;
    width: 100%;
    height: 56px;
    line-height: 24px;
    margin-bottom: 40px;
  }

  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 44px;
  }
`;

export default ContentStyle;
