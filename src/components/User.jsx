function User(props) {
    return(
        
        <>
        <span className="user">
            <span className="name">{props.userObj.name}</span>
            <span className="handle">{props.userObj.handle}</span>
          </span>
 
        </>
    )
}

export default User;