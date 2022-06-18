import { TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const GetUserDataOVO = () => {
  const [username, setUsername] = useState("+6285156961915");
  return (
    <div>
      <div>minta no telp yang didaftarin di ovo dong</div>
      <div>
        <TextField id="filled-basic" label="no telp" variant="filled" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <Link
        to="/sendauthovo"
        onClick={() => {
          localStorage.setItem("ovo-username", username);
          console.log("berhasil di set");
        }}
      >
        gaskan
      </Link>
    </div>
  );
};
export default GetUserDataOVO;
