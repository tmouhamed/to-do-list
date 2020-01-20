import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

class TodoItem extends React.Component {
    render() {
        const { taskList, deleteTask, editTask } = this.props;
        return (
            <>
                {/* move tasks with status "DONE" to the end of the list */}
                {taskList.sort((a, b) => (a.status === 'done') - (b.status === 'done')).map(task => {
                    if (task.status === 'done') {
                        return (
                            <tr key={task.id}>
                                <td><del>{task.title}</del></td>
                                {task.description ? <td><del>{task.description}</del></td> : <td>----</td>}
                                <td><del>{task.category}</del></td>
                                <td><del>{task.status}</del></td>
                                <td><del>{task.date}</del></td>
                                <td>
                                    <span className="text-danger mx-2" onClick={() => deleteTask(task.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                    <span className="text-success mx-2" onClick={() => editTask(task.id)}>
                                        <FontAwesomeIcon icon={faPen} />
                                    </span>
                                </td>
                            </tr>
                        );
                    }
                    else
                        return (
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                {task.description ? <td>{task.description}</td> : <td>----</td>}
                                <td>{task.category}</td>
                                <td>{task.status}</td>
                                <td>{task.date}</td>
                                <td>
                                    <span className="text-danger mx-2" onClick={() => deleteTask(task.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </span>
                                    <span className="text-success mx-2" onClick={() => editTask(task.id)}>
                                        <FontAwesomeIcon icon={faPen} />
                                    </span>
                                </td>
                            </tr>
                        );

                })}
            </>
        );
    }

}

export default TodoItem;