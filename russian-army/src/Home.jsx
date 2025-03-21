import { useEffect } from "react";
import Navbar from "./NavBar";
import soldier from "./assets/newsoldier.png";
import soundFile from "./assets/sound.mp3";

export default function Home() {
    const handleNavigatorJoin=()=>{
            window.location.pathname="/joinus";
    };

    

    
    useEffect(() => {
        const soundIcon = document.getElementById('soundIcon');
        const soundEffect = document.getElementById('soundEffect');

        if (soundIcon && soundEffect) {
            const playSound = () => {
                soundEffect.play();
            };

            soundIcon.addEventListener('click', playSound);

            return () => {
                soundIcon.removeEventListener('click', playSound);
            };
        }
    }, []);

    return (
        <>
            <header>
                <Navbar />
                <div className="home-elements">
                    <div className="text-smoke">
                        <h1>Russian Army</h1>
                        <h3>For the homeland! For the Win!<span id="soundIcon"> 🔊</span></h3>
                    </div>
                    <img src={soldier} alt="Soldier" />
                </div>
                <div className="pridruzise">
                    <h4 id="do-yo">Do you want to join <br /> the world's most powerful army?</h4>
                    <button className="glow-on-hover" onClick={handleNavigatorJoin}>Join Us</button>
                </div>
                <audio id="soundEffect" src={soundFile}></audio>
            </header>
        </>
    );
}
