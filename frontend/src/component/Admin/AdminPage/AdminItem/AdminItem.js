import React, { useState } from "react";
import "./AdminItem.css";

export default function AdminItem(props) {
  const { userEmail, userData, index, handleDelete } = props;
  //const id = userData.todos[0].id;
  //userData => obj, has todos array, array has data and id
  //console.log("index: ", index, userData.todos);
  const todosArr = userData.todos;

  const [uData, setUData] = useState(userData.todos[0].data);

  const handleChage = (e) => {
    setUData(e.target.value);
  };

  return (
    <div className="admin-item-container">
      <header>
        <h3 className="admin-item__header">{userEmail}</h3>
      </header>
      <div className="admin-item__todos">
        <section className="todos__new-todo">
          <form className="new-todo__form">
            <input className="new-todo__input" placeholder="Add New Todo" />
            <input className="new-todo__submit" type="submit" />
          </form>
        </section>

        {todosArr.map((data) => {
          return (
            <div className="todo">
              <input
                className="todo__input"
                id={data.id}
                value={data.data}
                onChange={handleChage}
              />
              <section className="todo__btns-section">
                <button className="todo__btns-section__save">Save</button>
                <button
                  className="todo__btns-section__delete"
                  // onClick={() => handleDelete(data.id, data.data)}
                >
                  Delete
                </button>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}
