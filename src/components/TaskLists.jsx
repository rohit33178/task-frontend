import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINT } from '../config';



export const TaskLists = () => {
  let navigate = useNavigate()  
  const [tasks, setTasks] = useState([]);

  let path = `${API_ENDPOINT}/all-tasks`  

  useEffect(() => {
    async function getTasks(){
        let data = await fetch(path, {
            method: 'GET'
        }); 
        let res = await data.json()
        setTasks(res.tasks);
    }
    getTasks();
  }, [])       

  return (
    <Fragment>
        <h2>Task Lists</h2>
        <hr />
        <button onClick={() => navigate("/")} style={{ cursor: 'pointer'}}>Create Task</button>
        {tasks?.map(task => (
            <>
            <div className='card'>
                <h3>{task.task}</h3>
                <p className='pointer'>{task.team?.join(",")}</p>
                <ul style={{ textAlign: "left"}}>
                  {task?.members?.map(mem => (
                    <li>{mem}</li>
                  ))}
                </ul>
            </div>
            </>
        ))}
    </Fragment>
  )
}
