import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
	tasks: Task[];
	deleteATask: (id: number) => void;
}

const TaskList = ({ tasks, deleteATask }: Props) => {
	return (
		<>
			{tasks.map((task) => (
				<div key={task.id} className="col-md-6 pb-2">
					<TaskCard task={task} deleteATask={deleteATask} />
				</div>
			))}
		</>
	);
};

export default TaskList;
