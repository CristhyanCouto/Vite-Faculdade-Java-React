import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid2,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
      <div className="container mx-auto mt-8 justify-center flex items-center flex-col h-screen">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <div className="flex flex-col gap-2 w-full items-center justify-center">
          <Grid2>
            <FormControl className="w-72">
              <InputLabel htmlFor="email-input">Email address</InputLabel>
              <Input
                className=""
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email-input"
                aria-describedby="email-helper-text"
              />
              <FormHelperText id="email-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </Grid2>
          <Grid2>
            <FormControl className="w-72">
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <Input
                className=""
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password-input"
                aria-describedby="password-helper-text"
              />
              <FormHelperText id="password-helper-text">
                We'll never share your password.
              </FormHelperText>
            </FormControl>
          </Grid2>
        </div>
        <Button onClick={() => console.log(email, password)}>Fake Login</Button>
        <Button component={Link} to="/home">Página de Tarefas</Button>
      </div>
  );
}
