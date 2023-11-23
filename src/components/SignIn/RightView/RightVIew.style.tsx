import styled from "styled-components";

const RightViewStyle = styled.div`
  background: #194bfb;
  height: 100%;
  display: block;
  position:relative;
  flex: 0 0 auto;
  width: 50%;
  @media (max-width: 1366px) {
    display: none;
  }
  .get-title {
    color: white;
    font-size: 40px;
    font-family: Manrope;
    font-weight: 800;
    line-height: 44px;
    word-wrap: break-word;
    padding-top: 80px;
    padding-bottom: 10px;
  }

  .get-body {
    color: white;
    font-size: 14px;
    font-family: Manrope;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.2px;
    word-wrap: break-word;
    width: 53%;
    margin: 0 auto;
  }

  .dollar {
    color: #facc15;
    font-size: 14px;
    font-family: Manrope;
    font-weight: 800;
    line-height: 21px;
  }

  .middle-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* .cashback-frame {
      position: absolute;
      left: 170px;
      top: 235px;
    }
    .balance-info {
      position: absolute;
      top: 25px;
      left: 423px;
    }
    .horizontal-group {
      position: relative;
      top: -201px;
      left: 17px;
    }
    .horizontal-group-end {
      position: relative;
      top: 194px;
      right: 45px;
    } */
  }

  .vector-start {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .vector-end {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    bottom: 2%;
    left: 2%;
  }
`;

export default RightViewStyle;
