import React, { Fragment, useState } from 'react'
import { MultiSelect } from 'react-multi-select-component';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '../config';

export const CreateTask = () => {
  const navigate = useNavigate();
      const teams = [
        { value: 'frontend', label: 'Frontend Team' },
        { value: 'backend', label: 'Backend Team' },
      ];
      const [task, setTask] = useState('');
      const [selected, setSelected] = useState([]);
      // console.log(API_ENDPOINT);
      const handleSubmit = async (e) => {
        // e.preventDefault();
        if(!task) return false;
        let myTeam = selected.map(item => item.value)
        if(myTeam?.length === 0) return false;
        let data = JSON.stringify({task, team: myTeam})
        let response = await fetch(`${API_ENDPOINT}/create-task`, {
          method: 'POST',
          body: data,
          headers: {
            'Content-Type': 'application/json',
          },
        });
        let res = await response.json()
        if(res.status === 200){
          alert("task added");
          setSelected([])
          setTask("")
          navigate("/task-lists");
        }
      };
  return (
    <Fragment>
        <h2>Create New Task</h2>
         <form style={{ textAlign: "left", marginTop: "5px"}}>
        <div>
          <label>Task description</label>
          <br />
          <textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{ width: '180px', marginTop: '10px' }}
          >
            {task}
          </textarea>
        </div>
        <div style={{ textAlign: "left", marginTop: "5px"}}>
          <label>Choose Your Team</label>
          <br />
          <MultiSelect 
            options={teams}
            value={selected}
            MultiSelect={true}
            onChange={setSelected}
            labelledBy="Select"
          />
        </div>
        <div>
          <button
            type="button"
            style={{ width: '180px', marginTop: '10px' }}
            onClick={(e) => handleSubmit()}
          >
            Assign Task
          </button>
        </div>
        <div>
        <button
            type="button"
            style={{ width: '180px', marginTop: '10px' }}
            onClick={(e) => navigate("/task-lists")}
          >
            View All Tasks
          </button>
        </div>
      </form>
    </Fragment>
  )
}
