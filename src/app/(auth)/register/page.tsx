"use client";
import Input from "@/app/components/material/input";
import { fetchActionApi } from "@/app/utils/action";
import { useState } from "react";

export default function Register() {
    const[ username, setUsername ] = useState("");
    const[ email, setEmail] = useState("");
    const[ password, setPassword] = useState("");
    const[ confirmePassword, setConfirmePassword] = useState("");    
    const register = async (e: React.FormEvent) =>  {
        e.preventDefault();
        if (password !== confirmePassword) {
            alert("เข้าสู่ระบบไม่สำเร็จ")
            return;
        }
        let body = {
            username: username,
            email: email,
            password: password
        };
        const res = await fetchActionApi("/api/auth/local", {
            method: "POST", 
            body: JSON.stringify(body)
        });

        if (res) {
            console.log(res);
            if (res.status !== 200) {
                console.log(res)
                alert("error")
            }
            console.log(res)
        }
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Register</h2>
                <form onSubmit={(e) => register(e)} className="flex flex-col gap-4">
                    <Input
                        type="text"
                        id="username"
                        value={username}
                        label="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required                    
                    />
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        label="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required                 
                    />
                    <Input
                        type="password"
                        id="confirmePassword"
                        value={confirmePassword}
                        label="ConfirmePassword"
                        onChange={(e) => setConfirmePassword(e.target.value)}
                        required                  
                    />
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