import { Task } from "../interfaces/Task";

interface Props {
	task: Task;
}

const TaskCard = ({task}: Props) => {
	return (
		<>
			<h2>{task.title}</h2>
			<p>{task.description}</p>
			<p>{task.completed ? "Completed" : "Not Completed"}</p>
		</>
	);
};

export default TaskCard;
