import React from "react";
import InputPasswordValidate from "./InputPasswordValidate";

type InputPasswordProps = {
    changeHandler: (value: string) => void;
    validate: boolean;
};

export default class InputPassword extends React.Component<InputPasswordProps> {
    render() {
        return (
            <div className="my-4 mx-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(event) => this.props.changeHandler(event.target.value)}
                />
                {this.props.validate ? <div></div> : <InputPasswordValidate />}
            </div>
        );
    }
}
