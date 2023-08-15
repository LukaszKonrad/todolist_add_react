import React from "react";
import "./style.css"

const Buttons = ({tasks, hideDoneTasks}) => (
   
    <div className = "buttons">
      {tasks.length > 0 && (
        <>
          <button className="container__button js-toggleHideDoneTasks">
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
          <button
          className="container__button"
          disabled={tasks.every(({done}) => done)}
         >
          Ukończ wszystkie</button>
          </>
      )}
    </div>
    )


export default Buttons;