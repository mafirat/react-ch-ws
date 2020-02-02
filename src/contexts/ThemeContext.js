import React, { Component, createContext } from 'react';

const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isDarkTheme: false,
        dark: {
            app: "bg-dark",
            navbar: "navbar-light bg-warning"
        },
        light: {
            app: "bg-light",
            navbar: "navbar-dark bg-dark"
        }
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;