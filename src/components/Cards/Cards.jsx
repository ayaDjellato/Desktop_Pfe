import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              number = {card.number}
              color={card.color}
              value={card.value}
              time = {card.time}
              series={card.series}
              statu = {card.statu}
              period = {card.period}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
