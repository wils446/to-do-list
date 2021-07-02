import React from "react";
import InputNameValidate from "./InputNameValidate";

type InputNameProps = {
    changeHandler: (value: string) => void;
    validate: boolean;
};

export default class InputName extends React.Component<InputNameProps> {
    render() {
        return (
            <div className="my-4 mx-3">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    onChange={(event) => this.props.changeHandler(event.target.value)}
                />
                {this.props.validate ? <div></div> : <InputNameValidate />}
            </div>
        );
    }
}
