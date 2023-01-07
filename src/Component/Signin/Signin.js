import React from "react"


export default function Signin(){
    return (
        <>
        <div className="container-1">
            <div className="box">
              <div className="box-1">
                <h1>Register</h1>
                <div className="data">
                    <input type="text" placeholder="email" name="email"/>
                    <input type="text" placeholder="password" name="password"/>
                </div>
                <div className="but">
                    <button>Login</button>
                </div>
                <h2>Forgot Password?</h2>
              </div>
            </div>
            </div>
        </>
    )
}