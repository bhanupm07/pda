import React from "react";

export default function ProfileCard({img, title, handle, description}) {
    return (
        <div className="profile-card">
            <div className="card-img">
                <img src={img} alt="pda logo" />
            </div>
            <h3>{title}</h3>
            <span>{handle}</span>
            <p>{description}</p>
        </div>
    )
}