import React from "react";

type NavbarProps = {
    username: string;
};

export default class Navbar extends React.Component<NavbarProps> {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="container">
                        <span className="navbar-brand mb-0 h1">Welcome!, {this.props.username}</span>
                    </div>
                </div>
            </div>
        );
    }
}
