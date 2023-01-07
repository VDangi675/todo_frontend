import React from "react"


export default function Signup(){
    return (
        <>
        <div className="container-1">
            <div className="box">
              <div className="box-1">
                <h1>Register</h1>
                <div className="data">
                    <input type="text" placeholder="email" name="email"/>
                    <input type="text" placeholder="password" name="password"/>
                    <input type="text" placeholder="confirmpassword" name="confirmpassword"/>
                </div>
                <div className="but">
                    <button>Register</button>
                </div>
                <h2>Member login</h2>
              </div>
            </div>
            </div>
        </>
    )
}