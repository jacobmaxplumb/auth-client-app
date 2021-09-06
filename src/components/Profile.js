const Profile = (props) => {
    console.log(props);
    return(<div>
        <h1>Profile</h1>
        <h1>{props.somthing}</h1>
    </div>)
}

export default Profile;