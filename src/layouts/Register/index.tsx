import React from "react";
import "./style.css";
import { createUser } from "../../common/api";
import InputName from "../../components/Register/InputName/index";
import InputEmail from "../../components/Register/InputEmail";
import InputPassword from "../../components/Register/InputPassword";

type RegisterState = {
    nameValue: string;
    emailValue: string;
    passwordValue: string;
    nameValidate: boolean;
    emailValidate: boolean;
    passwordValidate: boolean;
};

export default class Register extends React.Component<{}, RegisterState> {
    constructor(props = {}) {
        super(props);
        this.state = {
            nameValidate: true,
            emailValidate: true,
            passwordValidate: true,
            nameValue: "",
            emailValue: "",
            passwordValue: "",
        };
    }

    nameChangeHandler = (value: string): void => {
        if (!/^[a-z ,.'-]+$/i.test(value)) {
            this.setState({ nameValidate: false, nameValue: value });
        } else this.setState({ nameValidate: true, nameValue: value });
    };

    emailChangeHandler = (value: string): void => {
        const emailValidateRegex =
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[x01-x08x0bx0cx0e-x1fx21x23-x5bx5d-x7f]|\\[x01-x09x0bx0cx0e-x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[x01-x08x0bx0cx0e-x1fx21-x5ax53-x7f]|\\[x01-x09x0bx0cx0e-x7f])+)\])/;

        if (!emailValidateRegex.test(value)) {
            this.setState({ emailValidate: false, emailValue: value });
        } else this.setState({ emailValidate: true, emailValue: value });
    };

    passwordChangeHandler = (value: string): void => {
        const passwordValidateRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

        if (!passwordValidateRegex.test(value)) {
            this.setState({ passwordValidate: false, passwordValue: value });
        } else this.setState({ passwordValidate: true, passwordValue: value });
    };

    register = async () => {
        if (
            !(
                this.state.emailValidate &&
                this.state.passwordValidate &&
                this.state.nameValidate &&
                this.state.nameValue &&
                this.state.emailValue &&
                this.state.passwordValue
            )
        )
            return;

        console.log("test");
        const response = await createUser(this.state.nameValue, this.state.emailValue, this.state.passwordValue);
        if (response.status === 200) {
            /* success */
        }
    };

    render() {
        return (
            <div className="form center px-4">
                <h1 className="text-center display-4 mt-2 mb-5">Sign Up</h1>
                <InputName changeHandler={this.nameChangeHandler} validate={this.state.nameValidate} />
                <InputEmail changeHandler={this.emailChangeHandler} validate={this.state.emailValidate} />
                <InputPassword changeHandler={this.passwordChangeHandler} validate={this.state.passwordValidate} />
                <div className="text-start px-3 mb-4">
                    <button onClick={this.register} className="my-3 btn btn-success">
                        Sign In
                    </button>
                </div>
            </div>
        );
    }
}
