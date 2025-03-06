"use client";
import Input from "@/app/components/material/input";
import { fetchActionApi, setAccessToken } from "@/app/utils/action";
import { fetchApi } from "@/app/utils/fetch";
import { useState } from "react";
import { inflate } from "zlib";

interface LoginResponse {
    jwt: string;
    user: {
      id: number;
      documentId: number;
    }
  }
   
export default function Login() {
    const[ identifier, setIdentifier] = useState("");
    const[ password, setPassword ] = useState("");
    const login = async (e: React.FormEvent) =>  {
        e.preventDefault();
        let body = {
            identifier: identifier,
            password: password,
        }
        const res = await fetchActionApi("/api/auth/local", {
            method: "POST", 
            body: JSON.stringify(body)
        } as any);
        console.log(res);
        if (res) {
            console.log(res);
            if (res.status === 200) {
                const token = res.data as LoginResponse
                await setAccessToken(token.jwt);
                window.location.href = "/";
            } else{
                alert("login error")
            }
        }
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Login</h2>
            <form onSubmit={(e) => login(e)} className="flex flex-col gap-4">
                <div>
                    <Input
                        type="text"
                        id="identifier"
                        value={identifier}
                        label="Username or Email"
                        onChange={(e) => setIdentifier(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
    );
}