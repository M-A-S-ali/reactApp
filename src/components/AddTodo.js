import React from 'react'
import { useState } from 'react'

export const AddTodo = (props) => {
    const [tittle, settittle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!tittle || !desc) {
            alert("Tittle or Discription cannot be blank")
        } else {
            props.addTodo(tittle, desc);
            settittle("");
            setdesc("");
        }

    };
    return (
        <div className='container'>
            <h3>Add a ToDo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="tittle" className="form-label">ToDo Tiitle</label>
                    <input type="text" value={tittle} onChange={(e) => { settittle(e.target.value) }} className="form-control" id="tittle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Discription</label>
                    <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
