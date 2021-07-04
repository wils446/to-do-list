import React from "react";
import type { TaskData } from "../../../common/interfaces/TaskData";
import "./style.css";
import { updateTask } from "../../../common/api";

type TaskProps = {
    data: TaskData;
    deleteTask: (id: number) => void;
};

type TaskState = {
    date: string;
    onUpdate: boolean;
    titleValue: string;
    noteValue?: string;
};

export default class Task extends React.Component<TaskProps, TaskState> {
    constructor(props: TaskProps) {
        super(props);
        this.state = {
            date: this.dateConvert(),
            onUpdate: false,
            titleValue: this.props.data.title,
            noteValue: this.props.data.note,
        };
    }

    dateConvert = () => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const date = this.props.data.date;
        return `${days[date.getDay()]}, ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    };

    titleChangeHandler = (value: string) => {
        this.setState({ titleValue: value });
    };

    noteChangeHandler = (value: string) => {
        this.setState({ noteValue: value });
    };

    changeTask = async () => {
        this.setState({ onUpdate: true });
    };

    updateTask = async () => {
        this.setState({ onUpdate: false });
        const title = this.state.titleValue;
        const note = this.state.noteValue;

        const response = await updateTask(this.props.data.id, title, note);
        if (response !== 200) {
            this.setState({ titleValue: this.props.data.title });
            this.setState({ noteValue: this.props.data.note });
        }
    };

    render() {
        return (
            <div className="container">
                <div className="box mt-3 mb-3 px-3 py-2">
                    {this.state.onUpdate ? (
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                onChange={(event) => this.titleChangeHandler(event.target.value)}
                                className="form-control"
                                value={this.state.titleValue}
                            />
                            <div className="input-group-append">
                                <i
                                    onClick={this.updateTask}
                                    className="fa fa-save input-group-text"
                                    id="basic-addon2"
                                ></i>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3 className="title d-inline">{this.state.titleValue}</h3>
                            <h6 className="d-inline mx-2">{this.state.date}</h6>
                            <i onClick={this.changeTask} className="fa fa-pencil mx-1"></i>
                            <i
                                onClick={() => this.props.deleteTask(this.props.data.id)}
                                className="fa fa-trash-o mx-1"
                            ></i>
                        </div>
                    )}
                    {this.state.onUpdate ? (
                        <input
                            type="text"
                            onChange={(event) => this.noteChangeHandler(event.target.value)}
                            className="form-control"
                            value={this.state.noteValue}
                        />
                    ) : (
                        <>{this.state.noteValue ? <h6 className="mt-2">note : {this.state.noteValue}</h6> : <></>}</>
                    )}
                </div>
            </div>
        );
    }
}
