import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

import ProfileImage from "./Components/ProfileImage";
import { Card } from 'primereact/card';
import { Analytics } from '@vercel/analytics/react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Expériences from "./Components/Expériences";
import Formations from "./Components/Formations";
import Certificats from "./Components/Certificats";
import Projets from "./Components/Projets";
import imgGit from "./assets/github.png";
import imgLab from "./assets/gitlab.png";


function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="header">
          <ProfileImage />
          <h1>EL BYAZ  Abderrahman</h1>
          <h2><i>Elève ingénieur en (4ème année) informatique et réseaux </i></h2>
          <img src={imgGit} height="16px" width="16px"/><a class="link-opacity-100" rel="noopener" target="_blank" href="https://github.com/isayyeah">GitHub</a>
          &nbsp;&nbsp;<img src={imgLab} height="16px" width="16px" /><a class="link-opacity-100" rel="noopener" target="_blank" href="https://gitlab.com/elby_111">GitLab</a>

        </header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formations" className="nav-link">
                Formations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/certificats" className="nav-link">
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/expériences" className="nav-link">
                Expériences
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/projets" className="nav-link">
                Projets
              </Link>
            </li>
          </ul>
        </nav>


        <div className="container mt-4">
          <Routes>
              <Route exact path="/" element={<Accueil />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/expériences" element={<Expériences />} />
              <Route path="/certificats" element={<Certificats />} />
              <Route path="/projets" element={<Projets />} />
             
          </Routes>
        </div>

        {/*footer*/}
        <footer className="footer">
          <p><u>Contacter moi :</u>     <p>abderrahmanelbyaz@gmail.com </p></p>
        </footer>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

//Accueil
function Accueil() {
  return (
    <section className="section">
      <Card title="ABDERRAHMAN ELBYAZ">
        <p className="m-0" style={{ textAlign: 'justify' }}>
        Je suis actuellement étudiant en ingénierie informatique et réseaux (4ème année) à l'école EMSI MARRAKECH.
Curieux et passionné par les nouvelles technologies, je m'intéresse à de nombreux secteurs et suis toujours prêt à relever de nouveaux défis !
        </p>
      </Card>
    </section>
  );
}

export default App;
