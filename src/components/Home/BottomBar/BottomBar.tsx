import React from "react";
import "./style.css";
import { createTask } from "../../../common/api";

type BottomBarState = {
    onCreate: boolean;
    titleValue: string;
    noteValue?: string;
};

function CreateTaskButton(props: { createTask: () => void }) {
    return (
        <div onClick={props.createTask} className="button">
            <div className="py-2">
                <div className="h5 center">
                    <i className="fa fa-plus"></i> Create Task
                </div>
            </div>
        </div>
    );
}

type TaskFromProps = {
    titleChangeHandler: (value: string) => void;
    noteChangeHandler: (value: string) => void;
    createTask: () => void;
};

function CreateTaskForm(props: TaskFromProps) {
    return (
        <div className="form py-2">
            <input
                type="text"
                onChange={(ev) => props.titleChangeHandler(ev.target.value)}
                className="input-form mx-2"
                placeholder="Title"
            />
            <input
                type="text"
                onChange={(ev) => props.noteChangeHandler(ev.target.value)}
                className="input-form mx-2"
                placeholder="Note"
            />
            <button onClick={props.createTask} className="button">
                <i className="fa fa-plus"></i>
            </button>
        </div>
    );
}

export default class BottomBar extends React.Component<{}, BottomBarState> {
    constructor(props = {}) {
        super(props);
        this.state = {
            onCreate: false,
            titleValue: "",
        };
    }

    onCreateTask = () => {
        this.setState({ onCreate: true });
    };

    titleChangeHandler = (value: string) => {
        this.setState({ titleValue: value });
    };

    noteChangeHandler = (value: string) => {
        this.setState({ noteValue: value });
    };

    createTask = async () => {
        console.log(this.state.titleValue, this.state.noteValue);
        try {
            const response = await createTask(this.state.titleValue, this.state.noteValue);
            if (response === 200) alert("task created.");
        } catch (err) {
            alert("something went wrong.");
        }
        this.setState({ onCreate: false });
    };

    render() {
        return (
            <div className="bottom-bar text-center">
                <div className="container">
                    {this.state.onCreate ? (
                        <CreateTaskForm
                            titleChangeHandler={this.titleChangeHandler}
                            noteChangeHandler={this.noteChangeHandler}
                            createTask={this.createTask}
                        />
                    ) : (
                        <CreateTaskButton createTask={this.onCreateTask} />
                    )}
                </div>
            </div>
        );
    }
}
