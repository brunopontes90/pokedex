import "./menu.css";
import React from "react";
import { Link } from "react-router-dom";

function Menu() {

    const urlImage = "https://1000marken.net/wp-content/uploads/2021/01/Pokemon-logo.jpg";

    return (
        <header className="container-fluid bg-white" id="menu-header">
            <nav className="navbar navbar-expand-sm navbar-light">
                <Link to="/pokedex">
                    <img src={urlImage} alt="img" className="navbar-brand img-logo" />
                </Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navBarButton">
                    <i className="fas fa-bars fa-lg"></i>
                </button>
                <div id="navBarButton" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <div>
                            <li className="nav-item active">
                                <Link to="/pokedex" className="nav-link font-weight-bold">Inicio</Link>
                            </li>
                        </div>
                        <div className="dropdown">
                            <Link type="button" className="nav-link text-dark font-weight-bold" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Gerações
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="dropdown-list">
                                <Link className="dropdown-item nav-link font-weight-bold text-center" to="/pokedex/kanto">Kanto</Link>
                                <Link className="dropdown-item nav-link font-weight-bold text-center" to="/pokedex/johto">Johto</Link>
                                <Link className="dropdown-item nav-link font-weight-bold text-center" to="/#">Hoen</Link>
                                <Link className="dropdown-item nav-link font-weight-bold text-center" to="/#">Sinnoh</Link>
                                <Link className="dropdown-item nav-link font-weight-bold text-center" to="/#">Unova</Link>
                                <Link className="dropdown-item nav-link font-weight-bold text-center" to="/#">kalos</Link>
                                <Link className="dropdown-item nav-link font-weight-bold text-center" to="/#">Alola</Link>
                                <Link className="dropdown-item nav-link font-weight-bold text-center" to="/#">Galar</Link>
                                <Link className="dropdown-item nav-link font-weight-bold text-center" to="/#">Hisui</Link>
                                <Link className="dropdown-item nav-link font-weight-bold text-center" to="/#">Paldea</Link>
                            </div>
                        </div>
                        <div>
                            <li className="nav-item active">
                                <Link to="#" className="nav-link font-weight-bold">Quem Somos</Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Menu;