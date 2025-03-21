import { useEffect, useRef } from "react";
import Navbar from "./NavBar";
import img1 from "./assets/russiamap.png";
import img2 from "./assets/moscow.jpg";
import img3 from "./assets/putinabout.png";
import img4 from "./assets/skyscrapers.jpg";
import img5 from "./assets/siberia.jpg";
import img6 from "./assets/balet.jpg";
import BlurText from "./BlurText";

export default function About() {
    const aboutItemsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            aboutItemsRef.current.forEach((item) => {
                if (item) {
                    const position = item.getBoundingClientRect().top;
                    const screenHeight = window.innerHeight / 1.2;

                    if (position < screenHeight) {
                        item.classList.add("animated");
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Provera pri prvom učitavanju
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="about-section">
            <Navbar />
            <div className="about">
                <BlurText text="WELCOME TO RUSSIA" delay={0} animateBy="words" direction="top" className="blur-text welcome" />
                <BlurText text="GOD IS WITH US" delay={0} animateBy="words" direction="top" className="blur-text god" />

                <div className="about-items">
    <img ref={(el) => (aboutItemsRef.current[0] = el)} src={img1} alt="Russia map" className="about-img slideFromLeft" />
    
    <p ref={(el) => (aboutItemsRef.current[1] = el)} className="slideFromRight">
        Russia is the largest country in the world, located in Eastern Europe and North Asia. It covers more than 17 million square kilometers, which is almost 11% of the total land area on the planet. Due to its enormous size, Russia encompasses 11 time zones and has a large number of different climatic zones, from tundra in the north to steppes, forests and mountainous regions to the south.
    </p>
    
    <p ref={(el) => (aboutItemsRef.current[2] = el)} className="slideFromLeft">
        The capital of Russia is Moscow, which is also the largest city in the country. The second largest city is St. Petersburg, which is often known as the cultural capital of Russia. Russia has a rich history and cultural heritage, including significant contributions to art, music, literature and science.
    </p>
    
    <img ref={(el) => (aboutItemsRef.current[3] = el)} src={img2} alt="Moscow" className="about-img slideFromRight" />
    <img ref={(el) => (aboutItemsRef.current[4] = el)} src={img3} alt="Putin" className="about-img slideFromLeft" />
    
    <p ref={(el) => (aboutItemsRef.current[5] = el)} className="slideFromRight">
        Politics and Government: Russia is a federal presidential republic. The current president (as of 2025) is Vladimir Putin, who has been at the helm of the country for many years. Russia has a complex political system, with a strong centralized government.
    </p>
    
    <p ref={(el) => (aboutItemsRef.current[6] = el)} className="slideFromLeft">
        Economy: Russia is one of the largest producers of natural resources in the world, especially oil and gas. In addition, it has a significant industrial base, but the economy also faces challenges, such as dependence on raw material exports and Western sanctions that have been imposed in recent years.
    </p>
    
    <img ref={(el) => (aboutItemsRef.current[7] = el)} src={img4} alt="Skyscrapers" className="about-img slideFromRight" />
    <img ref={(el) => (aboutItemsRef.current[8] = el)} src={img5} alt="Siberia" className="about-img slideFromLeft" />
    
    <p ref={(el) => (aboutItemsRef.current[9] = el)} className="slideFromRight">
        Geography and Natural Beauty: Russia is home to many natural beauties, including Lake Baikal, which is the deepest lake in the world, as well as the Ural, Caucasus, and Altai Mountains. Siberia is also located in Russia, known for its vast expanses, but also for its cold climate, which is most pronounced in winter.
    </p>
    
    <p ref={(el) => (aboutItemsRef.current[10] = el)} className="slideFromLeft">
        Culture: Russia has a rich cultural tradition, with famous writers such as Leo Tolstoy, Fyodor Dostoevsky, Anton Chekhov, and Alexander Pushkin. She is also known for ballet (e.g. the Bolshoi Theater in Moscow), music (composers such as Pyotr Ilyich Tchaikovsky) and painting.
    </p>
    
    <img ref={(el) => (aboutItemsRef.current[11] = el)} src={img6} alt="Ballet" className="about-img slideFromRight" />
</div>

            </div>
        </div>
    );
}
