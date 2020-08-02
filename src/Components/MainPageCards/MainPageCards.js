import React from "react";
import Card from "react-bootstrap/Card";
import "./MainPageCards.css";

function MainPageCards({ title, Icon }) {
  return (
    <div>
      <Card
        border="info"
        style={{ width: "18rem", border: "1px solid #1565c0" }}
      >
        <Card.Body>
          <Card.Title className="MainPageCards_Title">
            {title}
            <Icon />
          </Card.Title>
          <Card.Text className="MainPageCards_Text">65</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default MainPageCards;
