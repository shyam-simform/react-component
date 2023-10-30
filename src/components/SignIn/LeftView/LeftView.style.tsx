import styled from "styled-components";

const LeftViewStyle = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .signin-container {
    padding-top: 130px;
    padding-bottom: 130px;
    width: fit-content;
    align-self: center;
  }

  .logo-container {
    display: flex;
    width: 149px;
    height: 28px;
    justify-content: center;
    align-items: flex-end;
    gap: 6.443px;
    flex-shrink: 0;
    align-self: flex-start;
  }

  .header-container {
    display: flex;
    width: 288px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    justify-content: center;
    width: 100%;
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
  }

  .sub-heading {
    color: var(--greyscale-600, #718096);
    text-align: center;
    /* body/large/regular */
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.3px;
  }

  .social {
    display: flex;
    width: 427px;
    align-items: flex-start;
    gap: 16px;
    margin-top: 30px;
  }

  .button-social {
    display: flex;
    height: 56px;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 12px;
    border: 1px solid var(--greyscale-300, #e2e8f0);
  }

  /* OR styles */
  .or {
    display: flex;
    width: 427px;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  .ant-divider-horizontal.ant-divider-with-text::before,
  .ant-divider-horizontal.ant-divider-with-text::after {
    background: #e2e8f0;
  }

  /* Field styles */
  .input {
    display: flex;
    width: 427px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .label {
    color: var(--greyscale-500, #a0aec0);
    /* body/large/regular */
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.3px;
  }

  .email {
    display: flex;
    height: 56px;
    padding: 16px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid var(--greyscale-300, #e2e8f0);
  }

  .password {
    display: flex;
    height: 56px;
    padding: 16px;
    align-items: center;
    gap: 12px;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid var(--greyscale-300, #e2e8f0);
  }

  .frame {
    display: flex;
    width: 427px;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 20px 0px;
  }

  .ant-btn-default {
    background-color: ${(props) => props.theme.white};
  }

  .text{
    padding-top: 28px;
  }

  .signin-btn {
    display: flex;
    width: 427px;
    height: 56px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 12px;
    background: var(--primary-base, #194bfb);
  }

  .inner-text {
    color: #1a202c;
    font-size: 16px;
    font-family: Manrope;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.2px;
    word-wrap: break-word;
  }

  .signup-text {
    color: #1a202c;
    font-size: 16px;
    font-family: Manrope;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0.2px;
    word-wrap: break-word;
  }

  .btn-text {
    color: var(--others-white, #fff);
    text-align: center;
    /* body/large/extrabold */
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 150%; /* 24px */
    letter-spacing: 0.2px;
  }

  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 44px;
  }
`;

export default LeftViewStyle;
