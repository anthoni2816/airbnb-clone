import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if(email === "" || password === ""){
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful");

    navigate("/home");

  };

  return (

    <div
      style={{
        background:"#0b1020",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >

      <form
        onSubmit={handleLogin}
        style={{
          background:"white",
          padding:"40px",
          width:"400px",
          borderRadius:"15px"
        }}
      >

        <h1 style={{textAlign:"center"}}>Login</h1>

        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          style={{
            width:"100%",
            padding:"12px",
            marginTop:"20px"
          }}

        />

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          style={{
            width:"100%",
            padding:"12px",
            marginTop:"20px"
          }}

        />

        <button

          style={{
            width:"100%",
            padding:"12px",
            marginTop:"25px",
            background:"#ff5a5f",
            color:"white",
            border:"none",
            cursor:"pointer"
          }}

        >

          Login

        </button>

        <p style={{marginTop:"20px"}}>

          Don't have an account?

          <Link to="/register">

            Register

          </Link>

        </p>

      </form>

    </div>

  );

}

export default Login;