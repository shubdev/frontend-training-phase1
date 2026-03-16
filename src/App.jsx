import { useUser, useCreateUser } from "./hooks/useUser";
import { useState } from "react";

function App() {
  const { data, isLoading, error } = useUser();

  const {
    mutate,
    isLoading: mutateIsLoading,
    isError: mutateIsError,
    error: mutateError,
  } = useCreateUser();
  console.log("mutate", mutate);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleCreateUsers = () => {
    mutate({ name, age });
  };

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
        {data?.map((user) => {
          return <h3 key={user.id}>{`${user.name} ${user.name}`}</h3>;
        })}

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleCreateUsers}>Create User</button>
      </div>
    </>
  );
}

export default App;
