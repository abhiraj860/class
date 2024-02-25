import React from 'react';

export const SignUp = ()=> {
    return<div style={{width: "100vh", justifyContent: "center", display: "flex"}}>
        <div style={{width: 400, border: "1px solid black"}}>
            <input type="text" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
        </div>
    </div> 
}