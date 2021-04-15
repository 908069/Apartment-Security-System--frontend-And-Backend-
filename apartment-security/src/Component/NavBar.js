import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {NavLink as Link} from 'react-router-dom'


export const Nav = styled.nav `
    background: #000;
    height: 80px;
    dispaly: flex;
    justify-content: space-between;
    padding : 0.5rem calc((100vw-100px) / 2);
    z-index:10`
    export const NavLink= styled(Link)`
    color:#fff
    display:flex
    align-items:center
    text-decoration: none
    padding:0 1rem
    height:100%
    cursor:pointer
    &.active{
        color:#15cdfc 
    }
    `