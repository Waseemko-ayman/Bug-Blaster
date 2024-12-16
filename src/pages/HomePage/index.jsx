import React from "react";
import "./style.css";
import Container from "../../components/Container";
import TicketForm from "../../components/TicketForm";

const HomePage = () => {
  return (
    <div>
      <Container>
        <TicketForm />
      </Container>
    </div>
  );
};

export default HomePage;
