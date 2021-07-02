import React from "react";

type InputPasswordProps = {
    changeHandler: (value: string) => void;
};

type InputEmailState = {
    validate: boolean;
};

export default class InputEmail extends React.Component<InputPasswordProps, InputEmailState> {
    constructor(props: InputPasswordProps) {
        super(props);
        this.state = { validate: true };
    }

    render() {
        return (
            <div className="my-4 mx-3">
                <label>Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(event) => this.props.changeHandler(event.target.value)}
                />
            </div>
        );
    }
}
