const SingalProfilePost = async (props) => {
  const user = await props.params;
  console.log(user);
  return (
    <h1>
      user: {user.usersname}, PostId: {user.postId}
    </h1>
  );
};

export default SingalProfilePost;
