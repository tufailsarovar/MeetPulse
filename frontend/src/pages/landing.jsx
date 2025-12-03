import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='meetpulse'>
                    <h1 className='admin'>Meetpulse</h1>
                </div>
                <div className='navlist'>
                    <p className='meetpulse-text' onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p className='meetpulse-text' onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p className='meetpulse-text'>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> <p className='admin'>with your loved Ones</p></h1>

                    <p className='admin'>Cover a distance by MeetPulse Video Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="../../public/wallpaper.png" alt="" />
                </div>
            </div>

        </div>
    )
}
