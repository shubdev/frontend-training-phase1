import useUser from "./hooks/useUser";

function App() {
  const { data, isLoading, error } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message || "Somthing went wrong..."}</p>;
  }

  console.log("data", data);

  return (
    <>
      <div>Sunny Using Tanstack Query</div>
      <div>
        {data.map((user) => {
          return (
            <h3
              key={user.id}
            >{`${user.name.firstname} ${user.name.lastname}`}</h3>
          );
        })}
      </div>
    </>
  );
}

export default App;
