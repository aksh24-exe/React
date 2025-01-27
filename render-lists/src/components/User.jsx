function User({ firstName, lastName , id}) {
  return (
    <>
      <h1>
        {firstName}
        <br />
        {lastName}
        <br />
        {id}
      </h1>
    </>
  );
}

export default User;
