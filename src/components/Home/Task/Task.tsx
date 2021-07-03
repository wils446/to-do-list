import React from "react";
import type { TaskData } from "../../../common/interfaces/TaskData";
import "./style.css";

type TaskProps = {
    data: TaskData;
};

type TaskState = {
    date: string;
};

export default class Task extends React.Component<TaskProps, TaskState> {
    constructor(props: TaskProps) {
        super(props);
        this.state = {
            date: this.dateConvert(),
        };
    }

    dateConvert = () => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const date = this.props.data.date;
        return `${days[date.getDay()]}, ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    };

    render() {
        return (
            <div className="container">
                <div className="box mt-3 mb-3 px-3 py-2">
                    <h3 className="title d-inline">{this.props.data.title}</h3>
                    <h6 className="d-inline mx-2">{this.state.date}</h6>
                    <h6 className="mt-2">note : {this.props.data.note}</h6>
                </div>
            </div>
        );
    }
}
