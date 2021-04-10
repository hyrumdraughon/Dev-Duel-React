import styled from 'styled-components'
import axios from 'axios'
import { useState } from 'react'

import '../App.css'
import Header from '../Components/Header'
import Card from '../Components/Card'
import CardTitle from '../Components/CardTitle'
import Hr from '../Components/Hr'
import Section from '../Components/Section'
import DuelData from '../Components/DuelData'

const StyledDuel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    font-family: "Fira Code", serif;
`

const Duel = () => {

    let [ReqSent, updateReqSent] = useState(false)
    let [winner, getWinner] = useState('')

    const [leftUsername, updateLeftUsername] = useState('')
    const [rightUsername, updateRightUsername] = useState('')

    let [leftUserResponse, updateLeftUserRes] = useState({})
    let [rightUserResponse, updateRightUserRes] = useState({})

    const leftUserSubmitted = (event) => {
        updateLeftUsername(event.target.value)
    }

    const rightUserSubmitted = (event) => {
        updateRightUsername(event.target.value)
    }

    const sendUsersRequest = async (event) => {
        event.preventDefault()
        let { data } = await axios.get(`http://localhost:3000/api/users/?username=${leftUsername}&username=${rightUsername}`)
        updateLeftUserRes(data[0])
        updateRightUserRes(data[1])
        getWinner('The Winner is '+ data[1].username)
        updateReqSent(true)
    }

    return (
        <StyledDuel>
            <Header />
            <Card>
                <CardTitle>duel</CardTitle>
                <Hr />
                <Section>
                    <form onSubmit={sendUsersRequest} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
                            <input name="username-left" type="text" placeholder="username" onChange={leftUserSubmitted} style={{textAlign:"center", margin:"4px 4px"}} />
                            <input name="username-right" type="text" placeholder="username" onChange={rightUserSubmitted} style={{textAlign:"center", margin:"4px 4px"}} />
                        </div>
                        <button type="submit" className="smallButton duel">duel</button>
                    </form>
                </Section>
                <section className={ReqSent ? '' : 'hide'} style={{display:"flex", justifyContent:"center"}}>
                    <h1 style={{backgroundColor: "rgb(33, 216, 49)"}}>{winner}</h1>
                </section>
                <DuelData className={ReqSent ? '' : 'hide'} userLeftResponse={leftUserResponse} userRightResponse={rightUserResponse} />
            </Card>
        </StyledDuel>
    )
}

export default Duel