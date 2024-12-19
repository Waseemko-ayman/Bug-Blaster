import React, { useReducer } from "react";
import "./style.css";
import Container from "../../components/Container";
import TicketForm from "../../components/TicketForm";
import reducer from "../../components/reducers";
import TicketList from "../../components/TicketList";
import sortTickets from "../../utilities";
import { TICKET_PRIORITY } from "../../mock/ticketPriority";

const HomePage = () => {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortPreference: "High to Low",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  const handleSorting = (e) => {
    dispatch({ type: "SET_SORTING", payload: e.target.value });
  };

  return (
    <div>
      <Container>
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets ({state.tickets.length})</h2>
            <select value={state.sortPreference} onChange={handleSorting}>
              {TICKET_PRIORITY.map(({ id, priority }) => (
                <option key={id} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
            <TicketList tickets={sortedTickets} dispatch={dispatch} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default HomePage;
