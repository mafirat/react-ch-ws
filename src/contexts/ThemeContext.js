import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isDarkTheme: false,
        dark: {
            app: "bg-dark",
            navbar: "navbar-light bg-warning",
            toggleButton: "btn-outline-dark",
            card : "bg-open-gray border-danger text-white"
        },
        light: {
            app: "bg-light",
            navbar: "navbar-dark bg-dark",
            toggleButton: "btn-outline-light",
            card : "bg-light border-info"
        }
    }
    getTheme = () => {
        const { isDarkTheme, dark, light } = this.state;
        return isDarkTheme ? dark : light
    }
    changeTheme = () => {
        this.setState({
            isDarkTheme: !this.state.isDarkTheme
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={
                {
                    ...this.state,
                    getTheme: this.getTheme,
                    changeTheme: this.changeTheme
                }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;