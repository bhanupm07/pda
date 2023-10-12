import React from "react";
import ProfileCard from "./component/ProfileCard";
import Alexa from "./images/alexa.png";
import Cortana from './images/cortana.png';
import Siri from "./images/siri.png";

export default function App() {
    return (
      <div className="card">
        <h1>Personal Digital Assistant</h1>
        <div className="cards">
            <ProfileCard 
                img={Alexa} 
                title="Alexa" 
                handle="@alexa92"
                description="Alexa was created by Amazon and helps you buy things."
            />
            <ProfileCard 
                img={Cortana} 
                title="Cortana" 
                handle="@cortana32"
                description="Cortana was made by Microsoft. Who knows what it does?"
            />
            <ProfileCard 
                img={Siri} 
                title="Siri" 
                handle="@siri56"
                description="Siri was made by Apple and is being phased out."
            />
        </div>
      </div>
    );
  }