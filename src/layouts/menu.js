import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <div>
            <header className="container-fluid bg-white" id="topo">
                <nav className="navbar navbar-expand-sm navbar-light">
                    <div id="navBarButton" className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link text-muted font-weight-bold">Inicio</Link>
                            </li>
                            <div className="dropdown">
                                <Link type="button" className="nav-link text-muted font-weight-bold" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Gerações
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link className="dropdown-item nav-link text-muted font-weight-bold text-center" to="/kanto">Kanto</Link>
                                    <Link className="dropdown-item nav-link text-muted font-weight-bold text-center" to="/johto">Johto</Link>
                                    <Link className="dropdown-item nav-link text-muted font-weight-bold text-center" to="/#">Hoen</Link>
                                    <Link className="dropdown-item nav-link text-muted font-weight-bold text-center" to="/#">Sinnoh</Link>
                                    <Link className="dropdown-item nav-link text-muted font-weight-bold text-center" to="/#">Unova</Link>
                                    <Link className="dropdown-item nav-link text-muted font-weight-bold text-center" to="/#">kalos</Link>
                                    <Link className="dropdown-item nav-link text-muted font-weight-bold text-center" to="/#">Alola</Link>
                                    <Link className="dropdown-item nav-link text-muted font-weight-bold text-center" to="/#">Galar</Link>
                                    <Link className="dropdown-item nav-link text-muted font-weight-bold text-center" to="/#">Hisui</Link>
                                    <Link className="dropdown-item nav-link text-muted font-weight-bold text-center" to="/#">Paldea</Link>
                                </div>
                            </div>
                            <li className="nav-item active">
                                <Link to="#" className="nav-link text-muted font-weight-bold">Quem Somos</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
        </div >
    );
}

export default Menu;