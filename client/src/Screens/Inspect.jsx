import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'

import '../App.css'
import Header from '../Components/Header'
import Card from '../Components/Card'
import CardTitle from '../Components/CardTitle'
import Hr from '../Components/Hr'
import Section from '../Components/Section'
import UserData from '../Components/UserData'

const StyledInspect = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

    font-family: "Fira Code", serif;
`

const Inspect = () => {

    let [ReqSent, updateReqSent] = useState(false)

    const [username, updateUsername] = useState('')
    let [userResponse, updateUserResponse] = useState({})

    const userSubmitted = (event) => {
        updateUsername(event.target.value)
    }

    const sendUserRequest = async (event) => {
        event.preventDefault()
        let { data } = await axios.get(`http://localhost:3000/api/user/${username}`)
        updateUserResponse(data)
        updateReqSent(true)
    }

    return (
        <StyledInspect>
            <Header />
            <Card>
                <CardTitle>inspect</CardTitle>
                <Hr />
                <Section>
                    <form onSubmit={sendUserRequest} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <input name="username" type="text" placeholder="username" onChange={userSubmitted} style={{textAlign:"center", margin:"8px auto"}} />
                        <button type="submit" className="smallButton">inspect</button>
                    </form>
                </Section>
                <UserData className={ReqSent ? '' : 'hide'} userResponseData={userResponse} />
            </Card>
        </StyledInspect>
    )
}

export default Inspect