const SingalProfile = async (props)=>{
    const user = await props.params;
    console.log(user);
    return <h1>user = {user.usersname}</h1>

}

export default SingalProfile;