import React from 'react';
import classNames from 'classnames';

const Task = ({ id, text, done, onChange, onDeete }) => {
  const ListItemClasses = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={ListItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn" onClick={() => onDeete(id)}></button>
    </li>
  );
};

export default Task;
