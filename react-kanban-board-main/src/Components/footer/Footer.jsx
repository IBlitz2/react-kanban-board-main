import React from "react";
import css from "./footer.module.css";

const Footer = ({ backlog, finished }) => {
  return (
    <footer className={css.container}>
      <div className={css.active}>
        <p className={css.item}>
          Active tasks: <strong>{backlog.length}</strong>
        </p>
        <p className={css.item}>
          Finished tasks: <strong>{finished.length}</strong>
        </p>
      </div>
      <p className={css.author}>
        Kanban board by <strong>Vladimir Brajevskiy</strong>, Year: 2023
      </p>
    </footer>
  );
};
export default Footer;
