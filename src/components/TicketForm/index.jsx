import React, { useEffect, useState } from "react";
import "./style.css";

const TicketForm = ({ dispatch, editingTicket }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handlePriority = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketData = {
      id: editingTicket ? editingTicket.id : Date.now(),
      title,
      description,
      priority,
    };

    dispatch({
      type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData,
    });

    clearForm();
  };

  const handleCancel = () => {
    dispatch({ type: "CLEAR_EDITING_TICKET" });
    clearForm();
  };

  useEffect(() => {
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  return (
    <form onSubmit={handleSubmit} className="ticket__form">
      <div>
        <label>Title</label>
        <input
          type="text"
          className="form__input"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          type="text"
          className="form__input"
          value={description}
          onChange={handleDescription}
        />
      </div>
      <fieldset className="priority__fieldset">
        <legend>Priority</legend>
        {Object.entries(priorityLabels).map(([value, label]) => (
          <label key={value} className="priority__label">
            <input
              type="radio"
              value={value}
              checked={priority === value}
              className="priority__input"
              onChange={handlePriority}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <button type="submit" className="button">
        Submit
      </button>
      {editingTicket && (
        <button className="button" onClick={handleCancel}>
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default TicketForm;
