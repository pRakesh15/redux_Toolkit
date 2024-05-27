import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slice/userDetails.js";

const Login = () => {
  const dispatch=useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmitFn=(e)=>
    {
      e.preventDefault();
      dispatch(loginUser(email, password));
      console.log(email,password)
    }

  return (
    <>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email} />

        <FormLabel>Password</FormLabel>
        <Input type="password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password} />
      </FormControl>
      <Button mt={30} onClick={handelSubmitFn}>Login</Button>
    </>
  );
};

export default Login;
