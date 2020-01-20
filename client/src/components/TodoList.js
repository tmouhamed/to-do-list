import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        const { taskList, deleteAll, deleteTask, editTask } = this.props;
        return (
            <>
                <table className=" table table-hover table-light table-bordered ">
                    {taskList.length ?
                        <thead>
                            <tr>
                                <th scope="col">Task</th>
                                <th scope="col">Description</th>
                                <th scope="col">Category</th>
                                <th scope="col">Status</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead> : null
                    }
                    <tbody>
                        <TodoItem taskList={taskList} deleteTask={deleteTask} editTask={editTask}/>
                    </tbody>
                </table>
                {/* condition to display clear all button only if theres more than one task */}
                {taskList.length > 1 ? <button className="btn btn-block btn-danger mt-5" onClick={deleteAll}>clear all</button> : ''}
            </>
        );
    }

}

export default TodoList;