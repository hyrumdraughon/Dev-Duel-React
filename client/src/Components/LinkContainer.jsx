import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin: 12px 0;
    padding-left: 10%;
    padding-right: 10%;
    width: 50%;
`

const LinkContainer = (props) => {
    return (
        <StyledDiv>
            {props.children}
        </StyledDiv>
    )
}

export default LinkContainer