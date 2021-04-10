import UserData from './UserData'

const DuelData = (props) => {
    return (
        <section className={props.className} style={{display:"flex", flexDirection:"column", justifyContent: 'space-between'}}>
            <UserData userResponseData={props.userLeftResponse} />
            <UserData userResponseData={props.userRightResponse} />
        </section>
    )
}

export default DuelData