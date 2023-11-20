import styled from "styled-components";

const VerifyEmailStyle = styled.div`
  height: calc(100vh - 172px);
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--greyscale-50, #fafafa);

  .container {
    border-radius: 16px;
    width: 510px;
    height: auto;
    padding: 40px;
    border-radius: 16px;
    background: var(--others-white, #fff);
    box-shadow: 0px 16px 24px 0px rgba(93, 106, 131, 0.02);
  }

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

  .verify-email {
    margin-bottom: 40px;
  }

  .code-send {
    color: var(--greyscale-600, #718096);
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }

  .email-text {
    color: var(--greyscale-900, #1a202c);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.2px;
  }

  .digit-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-bottom: 40px;
  }

  .digit {
    border-radius: 12px;
    border: 1px solid var(--greyscale-300, #e2e8f0);
    display: flex;
    width: 56px;
    height: 56px;
    padding: 12px 0px 13px 0px;
    justify-content: center;
    align-items: center;
  }

  .digit.active{
    border: 1px solid #194BFB;
  }
  .verify-account-btn {
    color: white;
    width: 100%;
    height: 56px;
    line-height: 24px;
    margin-bottom: 24px;
    border-radius: 12px;
    background: var(--primary-base, #194bfb);
  }

  .resend-text {
    color: var(--greyscale-600, #718096);
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }

  .minutes {
    color: var(--greyscale-900, #1a202c);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 150%;
    letter-spacing: 0.2px;
  }
`;

export default VerifyEmailStyle;
