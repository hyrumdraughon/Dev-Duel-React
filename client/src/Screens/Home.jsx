import styled from 'styled-components'

import Header from '../Components/Header'
import Card from '../Components/Card'
import CardTitle from '../Components/CardTitle'
import Hr from '../Components/Hr'
import Section from '../Components/Section'
import LinkContainer from '../Components/LinkContainer'
import Button from '../Components/Button'

const StyledHome = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    font-family: "Fira Code", serif;
`

const Home = () => {
    return (
        <StyledHome>
            <Header />
            <Card>
                <CardTitle>dev-duel</CardTitle>
                <Hr />
                <Section>
                    <LinkContainer>
                        <span>Judge someone's competence</span>
                        <Button href="./inspect" padding="14px 28px">
                            <i class="glyphicon glyphicon-search" style={{paddingRight:"5%", color:"rgb(64, 206, 64)"}}></i>inspect
                        </Button>
                    </LinkContainer>
                    <LinkContainer>
                        <span>Ultimate test of developer egos</span>
                        <Button href="./duel" padding="14px 28px" className="duel">
                            <i class="glyphicon glyphicon-fire" style={{paddingRight:"5%",color:"rgb(64, 206, 64)"}}></i>duel
                        </Button>
                    </LinkContainer>
                </Section>
            </Card>
        </StyledHome>
    )
}

export default Home