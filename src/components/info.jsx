import React from "react";

export default function Info(){
    return (
        <div className="info">
            <img src="/images/photo.png" alt="user_ph" className="user--img"/>
            <h1 className="user--name">Kartina Grekova</h1>
            <p className="user--prof">Frontend Developer</p>
            <p className="user--site">https://github.com/Kartiina</p>
            <div className="buttons">
                <button className="email">Email</button>
                <button className="linkedin">LinkedIn</button>
            </div>
        </div>
    )
}