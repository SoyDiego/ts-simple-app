import { Task } from "../interfaces/Task";

interface Props {
	task: Task;
	deleteATask: (id: number) => void;
}

const TaskCard = ({ task, deleteATask }: Props) => {
	return (
		<div key={task.id} className="card card-body bg-secondary rounded-0">
			<h2>{task.title}</h2>
			<p>{task.id}</p>
			<p>{task.description}</p>
			<p>{task.completed ? "Completed" : "Not Completed"}</p>
			<button
				onClick={() => task.id && deleteATask(task.id)}
				className="btn btn-danger">
				Delete
			</button>
		</div>
	);
};

export default TaskCard;
