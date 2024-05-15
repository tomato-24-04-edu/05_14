import styled from "styled-components";

export const HeaderContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:100vw;
    box-shadow: 0px 2px 3px #c9c9c9;
`

export const Navbar = styled.div`
    display:flex;
    justify-content: center;
    padding:20px 200px;
    gap:100px;
    width: calc(100vw - 400px);

`

export const HeaderContents = styled.div`
    text-align: center;
    font-size:30px;
    font-weight:bold;
`

export const NavbarContents = styled.div`
    text-align: center;
    font-size:25px;
    font-weight:bold;
    padding:3px 15px;
    background-color:orange;
    border-radius:10px;
    cursor: pointer;
`