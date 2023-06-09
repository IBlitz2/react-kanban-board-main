import React from "react";
import { useState } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Recast } from "../recast/Recast";
import { Task } from "../task/AddNewTask";
import { Cards } from "../../config";
import css from "./main.module.css";

const Main = ({
  backlog, ready, progress, finished, setBacklog, setReady, setProgress, setFinished,
}) => {
  const [val, setVal] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setActive] = useState(false);
  const [activeSelect, setSelect] = useState({
    ready: true,
    progress: true,
    finished: true,
    active: true,
  });

  const moveTask = (value, title) => {
    let newTask = title.find(({ name }) => name === value);

    if (newTask.stat === "Backlog") {
      setReady([
        ...ready,
        {
          id: newTask.id,
          name: newTask.name,
          description: newTask.description,
          stat: "Ready",
        },
      ]);
      let newArray = backlog.filter((item) => item.id !== newTask.id);
      setBacklog(newArray);
      setSelect({ ready: true, progress: true, finished: true, active: true });
    }

    if (newTask.stat === "Ready") {
      setProgress([
        ...progress,
        {
          id: newTask.id,
          name: newTask.name,
          description: newTask.description,
          stat: "In progress",
        },
      ]);
      let newArray = ready.filter((item) => item.id !== newTask.id);
      setReady(newArray);
      setSelect({ ready: true, progress: true, finished: true, active: true });
    } if (newTask.stat === "In progress") {
      setFinished([
        ...finished,
        {
          id: newTask.id,
          name: newTask.name,
          description: newTask.description,
          stat: "Finished",
        },
      ]);
      let newArray = progress.filter((item) => item.id !== newTask.id);
      setProgress(newArray);
      setSelect({ ready: true, progress: true, finished: true, active: true });
    }
  };
  
  
  // задание для backlog
  const handleButton = () => {
    if (val.trim().length > 0) {
      if (description.length > 0) {
        setBacklog([
          ...backlog,
          {
            id: Math.floor(Math.random() * 10000),
            name: val,
            description: description,
            stat: "Backlog",
          },
        ]);
      } else {
        setBacklog([
          ...backlog,
          {
            id: Math.floor(Math.random() * 10000),
            name: val,
            description: "This task has no description",
            stat: "Backlog",
          },
        ]);
      }
    }
    setActive(false);
    setVal("");
    setDescription("");
  };


  // вводим значение input
  const handleValue = (e) => {
    setVal(e.target.value);
  };
 
 
 
  //вводим значение textarea
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  return (
    <main className={css.mainly}>
      <div className={css.box}>
        {Cards.map((card) => (
          <div key={card.id} className={css.card}>
            <p className={css.title}>{card.title}</p>

            <ul className={css.list}>
              <Task
                card={card}
                backlog={backlog}
                ready={ready}
                progress={progress}
                finished={finished}
                setBacklog={setBacklog}
                setReady={setReady}
                setProgress={setProgress}
                setFinished={setFinished}
              />
            </ul>
            {(card.title === "Backlog" && (
              <div>
                <Input
                  val={val}
                  handleValue={handleValue}
                  isActive={isActive}
                  setActive={setActive}
                  activeSelect={activeSelect}
                  setSelect={setSelect}
                  description={description}
                  handleDescription={handleDescription}
                />
                <Button
                  isActive={isActive}
                  setActive={setActive}
                  card={card}
                  handleButton={handleButton}
                />
              </div>
            )) || (
              <Recast
                moveTask={moveTask}
                backlog={backlog}
                ready={ready}
                progress={progress}
                finished={finished}
                card={card}
                activeSelect={activeSelect}
                setSelect={setSelect}
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
