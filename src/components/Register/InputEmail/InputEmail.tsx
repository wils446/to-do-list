import React from "react";
import InputEmailValidate from "./InputEmailValidate";

type InputEmailProps = {
    changeHandler: (value: string) => void;
    validate: boolean;
};

export default class InputEmail extends React.Component<InputEmailProps> {
    render() {
        return (
            <div className="my-4 mx-3">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(event) => this.props.changeHandler(event.target.value)}
                />
                {this.props.validate ? <div></div> : <InputEmailValidate />}
            </div>
        );
    }
}
