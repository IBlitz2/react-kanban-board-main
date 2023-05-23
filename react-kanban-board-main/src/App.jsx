import React from "react";
import "./App.css";
import Header from "./Components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import TaskDetails from "./Components/task-details/TaskDetails";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";

function App() {
  const Backlog = JSON.parse(window.localStorage.getItem("backlog")) || [];
  const [backlog, setBacklog] = useState(Backlog);
  const Ready = JSON.parse(window.localStorage.getItem("ready")) || [];
  const [ready, setReady] = useState(Ready);
  const Progress = JSON.parse(window.localStorage.getItem("progress")) || [];
  const [progress, setProgress] = useState(Progress);
  const Finished = JSON.parse(window.localStorage.getItem("finished")) || [];
  const [finished, setFinished] = useState(Finished);

  useEffect(() => {
    window.localStorage.setItem("backlog", JSON.stringify(backlog));
    window.localStorage.setItem("ready", JSON.stringify(ready));
    window.localStorage.setItem("progress", JSON.stringify(progress));
    window.localStorage.setItem("finished", JSON.stringify(finished));
  }, [backlog, ready, progress, finished]);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
              <Main backlog={backlog} ready={ready} progress={progress} finished={finished}
                    setBacklog={setBacklog} setReady={setReady} setProgress={setProgress} setFinished={setFinished} />
            } ></Route>
          <Route path="/backlog/:taskId"
            element={
              <TaskDetails backlog={backlog} ready={ready} progress={progress} finished={finished}
                setBacklog={setBacklog} setReady={setReady} setProgress={setProgress} setFinished={setFinished} />
            } ></Route>
          <Route path="/ready/:taskId"
            element={
              <TaskDetails backlog={backlog} ready={ready} progress={progress} finished={finished}
                setBacklog={setBacklog} setReady={setReady} setProgress={setProgress} setFinished={setFinished} />
            } ></Route>
          <Route path="/progress/:taskId"
            element={
              <TaskDetails backlog={backlog} ready={ready} progress={progress} finished={finished}
                setBacklog={setBacklog} setReady={setReady} setProgress={setProgress} setFinished={setFinished} />
            } ></Route>
          <Route path="/finished/:taskId"
            element={
              <TaskDetails backlog={backlog} ready={ready} progress={progress} finished={finished}
                setBacklog={setBacklog} setReady={setReady} setProgress={setProgress} setFinished={setFinished} />
            } ></Route>
        </Routes>
      </Router>
      <Footer backlog={backlog} finished={finished} />
    </div>
  );
}
export default App;
