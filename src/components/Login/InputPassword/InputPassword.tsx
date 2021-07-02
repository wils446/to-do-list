import React from "react";

type InputPasswordProps = {
    changeHandler: (value: string) => void;
};

export default class InputPassword extends React.Component<InputPasswordProps> {
    render() {
        return (
            <div className="my-4 mx-3">
                <label>Password</label>
                <input type="email" className="form-control" placeholder="Enter password" />
            </div>
        );
    }
}
