const User = ({name, location, email}) => {
    
    return(
        <div className="user-cls">
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h3>{email}</h3>
        </div>
    );
}

export default User;