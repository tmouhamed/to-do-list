import React from 'react';
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

import "react-datepicker/dist/react-datepicker.css";

class TodoInput extends React.Component {
    render() {
        const { handleChange, handleSubmit, taskDescription, taskTitle, editTask, changeDate, taskStatus, taskDate, taskCategory } = this.props;
        return (
            <div className="my-3 card card-body">
                <form onSubmit={handleSubmit} className="needs-validation">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label htmlFor="taskTitle">Title</label>
                            <input className="form-control text-capitalize" type="text" name="taskTitle" value={taskTitle} onChange={handleChange} required />
                        </div>
                        <div class="form-group col-md-6">
                            <label htmlFor="textarea1">Descritpion</label>
                            <textarea className="form-control" id="textarea1" rows="1" type="text" name="taskDescription" value={taskDescription} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label htmlFor="statuSelect1">Task Status</label>
                            <select className="form-control" id="statuSelect1" name="taskStatus" value={taskStatus} onChange={handleChange} required>
                                <option value="">select</option>
                                <option value="pending">Pending</option>
                                <option value="active">Active</option>
                                <option value="done">Done !</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label htmlFor="statuSelect2">Task Category</label>
                            <select className="form-control" id="statuSelect2" name="taskCategory"  value={taskCategory} onChange={handleChange} required>
                                <option value="">select</option>
                                <option value="work">Work</option>
                                <option value="personal">Personal</option>
                                <option value="health">Health</option>
                                <option value="health">Meeting</option>
                                <option value="health">Study</option>
                            </select>
                        </div>
                        <div class="form-group col-md-4">
                            <label>Date</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon={faCalendarWeek} />
                                    </span>
                                </div>
                                <DatePicker className="form-control" onChange={changeDate} isClearable showTimeSelect selected={taskDate} dateFormat="MMMM d, yyyy h:mm aa" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={editTask ? "btn btn-block btn-success mt-3" : "btn right btn-outline-info"}>{editTask ? "Edit Item" : "Add Item"}</button>
                </form>
            </div >
        );
    }

}

export default TodoInput;