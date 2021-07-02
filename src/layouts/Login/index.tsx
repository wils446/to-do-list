import React from "react";
import "./style.css";
import InputEmail from "../../components/Login/InputEmail";
import InputPassword from "../../components/Login/InputPassword";
import { login } from "../../common/api";

type LoginState = {
    emailValue: string;
    passwordValue: string;
};

export default class Login extends React.Component<{}, LoginState> {
    constructor(props = {}) {
        super(props);
        this.state = {
            emailValue: "",
            passwordValue: "",
        };
    }

    emailHandleChange = (e: string) => {
        this.setState({ emailValue: e });
    };

    passwordHandleChange = (e: string) => {
        this.setState({ passwordValue: e });
    };

    signIn = async () => {
        const response = await login(this.state.emailValue, this.state.passwordValue);
        if (response.id) {
            localStorage.setItem("jwtToken", response.JWTToken);
            /* success */
        }
    };

    render() {
        return (
            <div className="form center px-4">
                <h1 className="text-center display-4 mt-2 mb-5">Sign In</h1>
                <InputEmail changeHandler={this.emailHandleChange} />
                <InputPassword changeHandler={this.passwordHandleChange} />
                <div className="text-start px-3 mb-4">
                    <button onClick={this.signIn} className="my-3 btn btn-success">
                        Sign In
                    </button>
                </div>
            </div>
        );
    }
}
