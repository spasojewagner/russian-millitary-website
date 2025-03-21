import Navbar from "./NavBar";
//import img1 from "./assets/putin.png";
//import img2 from "./assets/belousov.png";
import { useState } from "react";

export default function Leadership() {
   // const images =[img1, img2];
  return (
    <>
      <div className="leadership-section">
        <Navbar />
        <h1>Command of the Russian Army</h1>
        <p>Touch image</p>
        <div className="cards-container">
          {/* PRVI RED - 1 KARTICA */}
          <div className="row">
            <div className="wrapper">
              <div className="single-card">
                <div className="front"></div>
                <div className="back">
                  <div className="content">
                    <h2>Vladimir Putin</h2>
                    <h4>President of Russian Federation</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DRUGI RED - 2 KARTICE */}
          <div className="row">
            <div className="wrapper">
              <div className="single-card">
                <div className="front"></div>
                <div className="back">
                  <div className="content">
                    <h2>Andrei
                    Belousov</h2>
                    <h4>Minister of Defence</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="single-card">
                <div className="front"></div>
                <div className="back">
                  <div className="content">
                    <h2>Valery Gerasimov</h2>
                    <h4>Chief of the General Staff</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TREĆI RED - 5 KARTICA */}
          <div className="row">
            <div className="wrapper">
              <div className="single-card">
                <div className="front"></div>
                <div className="back">
                  <div className="content">
                    <h2>Andrey Kartapolov</h2>
                    <h4>Head of the State Duma Defense Committee</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="single-card">
                <div className="front"></div>
                <div className="back">
                  <div className="content">
                    <h2>Sergey Rudskoy</h2>
                    <h4>Chief of the Main Operational Directorate</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="single-card">
                <div className="front"></div>
                <div className="back">
                  <div className="content">
                    <h2>Igor Kostyukov</h2>
                    <h4>Head of the GRU</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="single-card">
                <div className="front"></div>
                <div className="back">
                  <div className="content">
                    <h2>Viktor Afzalov</h2>
                    <h4>Commander of Aerospace Forces</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="single-card">
                <div className="front"></div>
                <div className="back">
                  <div className="content">
                    <h2>Oleg Salyukov</h2>
                    <h4>Commander-in-Chief of the Ground Forces</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
