import { useState } from "react";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.username);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    setUsername("");
    // navigate("/menu");
  }

  if (userName)
    return (
      <Button to="/menu" type={"primary"}>
        Continue Ordering, {userName}
      </Button>
    );

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-white">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input w-72 mt-3 mb-6 px-4 py-2"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
