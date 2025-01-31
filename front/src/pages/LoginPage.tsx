import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../App";
import { localSave } from "../utils/localStorage";
import verifyLogin from "../utils/verifyLogin";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (): Promise<void> => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const token = await result.user.getIdToken();
      await localSave("AcessToken_QuickCMS", token);
      console.log(token);
      await verifyLogin();
    } catch (e) {
      setError("Failed to login");
    }
  };

  return (
    <div className=" bg-slate-400 flex items-center flex-col gap-10">
      <h1 className="">Login</h1>
      <div className="w-[280px] flex gap-4 flex-col">

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

      </div>
      <Button onClick={handleLogin}>Login</Button>

      {error && <div>{error}</div>}
    </div>
  );
};

export default LoginPage;
