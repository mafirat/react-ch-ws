import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends React.Component {
    static contextType = ThemeContext
    render() {
        const { isDarkTheme, getTheme } = this.context;
        const theme = getTheme();
        return (
            <nav className={`navbar navbar-expand-lg ${theme.navbar} rounded mb-2`}>
                <NavLink className="navbar-brand" to="/">YazTest</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/">Ana sayfa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/results">Sonuçlarım</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/challenges">Metinler</NavLink>
                        </li>
                    </ul>
                </div>
                <button type="button" className={`btn ${theme.toggleButton}`} onClick={this.context.changeTheme}>{(isDarkTheme === true ? <span>Açık Tema <i className="far fa-lightbulb"></i></span> : <span>Koyu Tema <i className="fas fa-lightbulb"></i></span>)}</button>
            </nav>
        );
    }
}

export default Navbar;