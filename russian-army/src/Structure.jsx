import NavBar from "./NavBar";
import RussiaMap from "./RussiaMap";
import img1 from "./assets/1.JPG";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";



export default function Structure() {
    const forces = [
        { name: "Land Forces", img: img1 },
        { name: "AeroSpace Forces", img: img2 },
        { name: "Navy", img: img3 },
        { name: "Strategic Missile Forces", img: img4 },
        { name: "Airborne Troops", img: img5 },
    ];
  
    return (
        <>
            <div className="structure-section">
                <NavBar />
                <h4>YOUR FORCES</h4>
                <div className="gallery">
                    {forces.map((force, index) => (
                        <div key={index} className="force">
                            <div
                                className="image"
                                style={{ backgroundImage: `url(${force.img})` }}
                            ></div>
                            <p>{force.name}</p>
                        </div>
                    ))}
                </div>
           <h4>Interactive Map of RUSSIA</h4>
    <RussiaMap />

               
            </div>
        </>
    );
}