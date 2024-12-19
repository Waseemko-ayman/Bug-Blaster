import React from "react";
import "./style.css";
import TicketItem from "../TicketItem";

const TicketList = ({ tickets, dispatch }) => {
  return (
    <div className="ticket__list">
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TicketList;
