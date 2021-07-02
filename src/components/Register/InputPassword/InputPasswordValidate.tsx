import React from "react";

export default class InputPasswordValidate extends React.Component {
    render() {
        return (
            <div className="text-danger">
                the password must have at least 1 lowercase, 1 uppercase, 1 numeric, 1 special character and 8
                characters or longer
            </div>
        );
    }
}
