import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledHeader = styled.header`
    background-color: rgb(64, 206, 64);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 24px 4px;
    width: 95%;
    max-width: 750px;
`

const StyledLink = styled(NavLink)`
    margin: 0 12px;
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: underline;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <div>
                <StyledLink to="./home" activeStyle={{fontWeight:"bold"}}>&lt;dev-duel&gt;</StyledLink>
            </div>
            <nav>
                <StyledLink to="inspect" activeStyle={{fontWeight:"bold"}}>inspect</StyledLink>
                <StyledLink to="./duel" activeStyle={{fontWeight:"bold"}}>duel</StyledLink>
            </nav>
        </StyledHeader>
    )
}

export default Header