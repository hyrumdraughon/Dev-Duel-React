import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    //height: 14px;
    & > * {
        display: flex;
        width: 50%;
        font-style: "Fira Code", serif;
        font-size: 16px;
        font-weight: normal;
    }
    & > .label {
        justify-content: flex-end;
        color: #333;
    }
    & > .value {
        justify-content: flex-start;
    }
`

const Stat = (props) => {
    return (
        <StyledDiv>
            {props.children}
        </StyledDiv>
    )
}

export default Stat