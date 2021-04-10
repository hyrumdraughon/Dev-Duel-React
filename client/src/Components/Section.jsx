import styled from 'styled-components'

const StyledSection = styled.section`
    display: flex;
    justify-content: space-around;
    /* flex-direction: column; */
    align-items: center;
    margin: 24px 0;
`

const Section = (props) => {
    return (
        <StyledSection>
            {props.children}
        </StyledSection>
    )
}

export default Section