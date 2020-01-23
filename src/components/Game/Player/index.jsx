import React from "react";
import Card from "../Card";
import { getCardsScore } from "../../../utils";
import "./player.scss";
import { CARD_BACK_SIDE_IMG } from "../../../const";

export default function Player({ cards, type = "player", reveal = true }) {
  return (
    <div>
      <div data-testid="score" className="score">
        {type} score: {reveal ? getCardsScore(cards) : 0}
      </div>
      <div className="container">
        {cards.length > 0 &&
          cards.map(card => (
            <Card
              key={card.value + card.suit}
              reveal={reveal}
              imgSrc={reveal ? card.image : CARD_BACK_SIDE_IMG}
            />
          ))}
      </div>
    </div>
  );
}
