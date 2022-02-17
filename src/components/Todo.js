import React,{useState} from 'react'
import { addTodo,delTodo,removeTodo } from '../actions';
import {useDispatch,useSelector} from "react-redux"
import "./todo.css";

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state)=> state.todoReducers.list);
  return (
    <>
     <div className='main'>
      <div className='child'>
        <figure>
        <figcaption>To-do List</figcaption>
        </figure>

        <div className='addItems'>
          <input type="text" placeholder="Add Items.." value={inputData} onChange={(event)=> setInputData(event.target.value) }/>
          <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData),setInputData(''))}></i>
        </div>

        <div className='showItems'>
            {
                list.map((elem)=>{
                    return(
                    <div className='eachItem' key={elem.id}>
                    <div ckassName="data">{elem.data}</div>
                    <div className='todo-btn'>

                    <i className="far fa-trash-alt add-btn" title="Delete" onClick={() => dispatch(delTodo(elem.id))}></i>
                </div>
                </div>
                    )
                })
            }
           
        </div>
        <div className='showItems'>
            <br></br>
            <button className='btn' data-sm-link-text="remove all" onClick={()=> dispatch(removeTodo())}><span>Remove All</span></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Todo