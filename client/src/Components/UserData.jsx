import styled from 'styled-components'

import Stat from "./Stat"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: "Fira Code", serif;
    font-size: 16px;
    font-weight: normal;
    padding-bottom: 40px;
`

const StyledStatsDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const UserData = (props) => {

    const { username, name, location, bio, "avatar-url":avatarUrl, 
        titles, "favorite-language":favoriteLanguage, "total-stars":totalStars, 
        "highest-starred":highestStarCount, "public-repos":publicRepos, 
        "perfect-repos":perfectRepos, followers, following } = props.userResponseData

    return (
        <StyledSection className="user-results" className={props.className}>
            <span style={{fontWeight:"bold"}}>{username}</span>
            <span>{name}</span>
            <span>{location}</span>
            <span>{username}@blah.com</span>
            <span>{bio}</span>
            <img className="avatar" src={avatarUrl} alt="avatar picture" />
            <StyledStatsDiv>
                <Stat>
                    <span className="label">Titles:&nbsp;</span>
                    <span className="titles value">{typeof titles === 'undefined' ? '' : titles.join(", ")}</span>
                </Stat>
                <Stat>
                    <span className="label">Favorite language:&nbsp;</span>
                    <span className="favorite-language value">{favoriteLanguage}</span>
                </Stat>
                <Stat>
                    <span className="label">Total stars:&nbsp;</span>
                    <span className="total-stars value">{totalStars}</span>
                </Stat>
                <Stat>
                    <span className="label">Highest star count:&nbsp;</span>
                    <span className="most-starred value">{highestStarCount}</span>
                </Stat>
                <Stat>
                    <span className="label">Public repos:&nbsp;</span>
                    <span className="public-repos value">{publicRepos}</span>
                </Stat>
                <Stat>
                    <span className="label">'Perfect' Repos:&nbsp;</span>
                    <span className="perfect-repos value">{perfectRepos}</span>
                </Stat>
                <Stat>
                    <span className="label">Followers:&nbsp;</span>
                    <span className="followers value">{followers}</span>
                </Stat>
                <Stat>
                    <span className="label">Following:&nbsp;</span>
                    <span className="following value">{following}</span>
                </Stat>
            </StyledStatsDiv>
        </StyledSection>
    )
}

export default UserData