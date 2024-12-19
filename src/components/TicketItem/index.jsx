import React from "react";
import "./style.css";

const TicketItem = ({ ticket, dispatch }) => {
  const { id, title, description, priority } = ticket;

  const priorityClass = {
    1: "priority__low",
    2: "priority__medium",
    3: "priority__high",
  };

  const handleDeleteTicket = () => {
    dispatch({ type: "DELETE_TICKET", payload: { id } });
  };

  const handleEditTicket = () => {
    dispatch({ type: "SET_EDITING_TICKET", payload: ticket });
  };

  return (
    <div className="ticket__item">
      <div className={`priority__dot ${priorityClass[priority]}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="button" onClick={handleDeleteTicket}>
        Delete
      </button>
      <button className="button" onClick={handleEditTicket}>
        Edit
      </button>
    </div>
  );
};

export default TicketItem;
