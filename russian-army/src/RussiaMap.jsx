import React, { useEffect } from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { ruMill } from '@react-jvectormap/russia';
//SVI ELEMENTI SU POKUPLJENI IZ STYLES.MODULES.SCCSS FILE KOJI SE NALAZI U node_modules>@react-jvectormap>core>SRC>componenenst>mapContanier
function RussiaMap() {
    useEffect(() => {
        // Pronalazimo dugmiće i menjamo im poziciju
        const zoomInButton = document.querySelector(".jvectormap-zoomin");
        const zoomOutButton = document.querySelector(".jvectormap-zoomout");
        const goBackButton = document.querySelector(".jvectormap-goback");

        if (zoomInButton) {
            zoomInButton.style.position = "absolute";
            zoomInButton.style.top = "50px";
            zoomInButton.style.left = "10px";
            zoomInButton.style.backgroundColor = "#007bff"; // Plava pozadina
            zoomInButton.style.border = "none";
            zoomInButton.style.borderRadius = "5px";
            zoomInButton.style.padding = "10px";
            zoomInButton.style.color = "white";
            zoomInButton.style.fontSize = "14px";
            zoomInButton.style.cursor = "pointer";
            zoomInButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        }
        if (zoomOutButton) {
            zoomOutButton.style.position = "absolute";
            zoomOutButton.style.top = "90px";
            zoomOutButton.style.left = "10px";
            zoomOutButton.style.backgroundColor = "#dc3545"; // Crvena pozadina
            zoomOutButton.style.border = "none";
            zoomOutButton.style.borderRadius = "5px";
            zoomOutButton.style.padding = "10px";
            zoomOutButton.style.color = "white";
            zoomOutButton.style.fontSize = "14px";
            zoomOutButton.style.cursor = "pointer";
            zoomOutButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        }
        if (goBackButton) {
            goBackButton.style.position = "absolute";
            goBackButton.style.bottom = "50px";
            goBackButton.style.left = "20px";
            goBackButton.style.backgroundColor = "#28a745"; // Zeleni dugme
            goBackButton.style.border = "none";
            goBackButton.style.borderRadius = "5px";
            goBackButton.style.padding = "10px";
            goBackButton.style.color = "white";
            goBackButton.style.fontSize = "14px";
            goBackButton.style.cursor = "pointer";
            goBackButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        }
    }, []);

    const handleRegionTipShow = (e, el, code) => {
        // Povećavamo veličinu tooltip-a i fonta
        el.html(`<strong style="font-size: 22px; color: #333; background-color: #f39c12; padding: 10px 15px; border-radius: 5px; border: 2px solid #d35400;">${el.text()}</strong>`);
    };

    return (
        <div style={{
            position: "relative",
            width: "100%",
            height: "500px",
            overflow: "hidden",
            border: "10px solid grey",  // Dodajemo border oko sekcije
            borderRadius: "10px",       // Dodajemo border radius za zaobljene ivice
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Dodajemo blagu senku oko sekcije
        }}>
            <VectorMap
                map={ruMill}
                containerStyle={{
                    width: "100%",
                    height: "100%", // Puna visina kontejnera
                    maxHeight: "500px", // Možete promeniti maksimalnu visinu prema potrebama
                    overflow: "hidden",

                }}
                regionStyle={{
                    initial: {
                        fill: "#f39c12", // Postavite početnu boju na žutu
                        "fill-opacity": 1,
                        stroke: "black",
                        "stroke-width": 1,
                        "stroke-opacity": 0.5,
                    },
                    hover: {
                        fill: "#f1c40f", // Tamnija žuta pri hoveru
                        "fill-opacity": 1,
                        cursor: "pointer", // Kursor se menja u "pointer"
                    },
                    selected: {
                        fill: "#f39c12", // Svetlija nijansa žute kada je region selektovan
                    }
                }}
                backgroundColor="transparent"
                zoomOnScroll={false} // Isključuje zoom pri skrolovanju
                zoomButtons={true} // Omogućava zoom dugmadi
                zoomButtonsPosition="left" // Postavlja dugmadi levo
                onRegionTipShow={handleRegionTipShow} // Povećava tooltip pri hoveru
            />
        </div>
    );
}

export default RussiaMap;
