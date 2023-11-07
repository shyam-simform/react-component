import styled from "styled-components";

const NavbarStyle = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  right: 0%;

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1a202c;
    height: 100px;
    padding: 0 48px;
  }

  .menu-btn {
    .btn {
        height: 56px;
      padding: 16px 47.5px;
    }
  }

  .btn {
    color: white;
    border: none;
    font-size: 16px;
    font-family: Manrope;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0.2px;
    word-wrap: break-word;
  }
`;

export default NavbarStyle;
