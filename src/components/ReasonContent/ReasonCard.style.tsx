import styled from "styled-components";

const ReasonCardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  
  .container {
    width: 204px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 12px;
    border: 1px solid var(--greyscale-300, #e2e8f0);
    background: var(--others-white, #fff);
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 424px) {
      width:155px;
      height:156px;
  }
  }

  .reason-icon{
    background: #FAFAFA;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export default ReasonCardStyle;
