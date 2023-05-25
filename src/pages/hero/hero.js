import React from 'react'
import Navbar from "../../components/navbar/navbar";
import "./hero.css"
import { Link } from "react-router-dom";

function hero() {
    return (
        <div className="hero-section">
            <Navbar/>

            <h1 className="title">HISTORIAS PERTURBADORAS DE SERIAL KILLERS<br></br></h1>
           <Link to="/stories"><img src="https://res.cloudinary.com/dnho57ne8/image/upload/v1684018717/red_hexagon_of_satanic_tribe_no__7_by_king_forrestbob-d78jo0z-removebg-preview_a1qpbq.png"/></Link>
           <p>Pronto?</p>
            <h2 className="subtitle">Clique no hexágono</h2>
        </div>
    )
}

export default hero