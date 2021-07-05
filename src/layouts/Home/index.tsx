import React from "react";
import Navbar from "../../components/Home/Navbar";
import Task from "../../components/Home/Task";
import BottomBar from "../../components/Home/BottomBar";
import type { TaskData } from "../../common/interfaces/TaskData";
import { deleteTask } from "../../common/api/index";
import "./style.css";

type TaskState = {
    data: TaskData[];
};

function TaskList(props: { data: TaskData[]; deleteTask: (id: number) => void }) {
    return (
        <>
            {props.data.map((data) => (
                <Task data={data} key={data.id} deleteTask={props.deleteTask} />
            ))}
        </>
    );
}

export default class Home extends React.Component<{}, TaskState> {
    constructor(props = {}) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: "ngoding",
                    note: "bahasa typescript",
                    date: new Date(),
                },
                {
                    id: 2,
                    title: "test",
                    note: "bahasa typescript",
                    date: new Date(),
                },
                {
                    id: 3,
                    title: "ngoding",
                    note: "bahasa typescript",
                    date: new Date(),
                },
                {
                    id: 4,
                    title: "ngoding",
                    note: "bahasa typescript",
                    date: new Date(),
                },
                {
                    id: 5,
                    title: "ngoding",
                    note: "bahasa typescript",
                    date: new Date(),
                },
                {
                    id: 6,
                    title: "ngoding",
                    note: "bahasa typescript",
                    date: new Date(),
                },
                {
                    id: 7,
                    title: "ngoding",
                    note: "bahasa typescript",
                    date: new Date(),
                },
                {
                    id: 8,
                    title: "ngoding",
                    note: "bahasa typescript",
                    date: new Date(),
                },
            ],
        };
    }

    deleteTask = async (id: number) => {
        const dataFilter = this.state.data.filter((d) => d.id !== id);
        this.setState({ data: dataFilter });

        try {
            const responseStatus = await deleteTask(id);
            if (responseStatus === 200) alert("task deleted.");
        } catch (err) {
            alert("Error!, something went wrong.");
        }
    };

    render() {
        return (
            <div>
                <Navbar username="wilson" />
                <div className="task">
                    <TaskList data={this.state.data} deleteTask={this.deleteTask} />
                </div>
                <BottomBar />
            </div>
        );
    }
}
