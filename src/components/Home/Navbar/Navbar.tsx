import React from "react";
import "./style.css";

type NavbarProps = {
    username: string;
};

export default class Navbar extends React.Component<NavbarProps> {
    render() {
        return (
            <div className="navbar">
                <div className="container-fluid">
                    <div className="container">
                        <span className="navbar-brand mb-0 h1">Welcome!, {this.props.username}</span>
                    </div>
                </div>
            </div>
        );
    }
}
