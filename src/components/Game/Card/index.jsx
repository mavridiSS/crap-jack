import React, { useState } from "react";
import classNames from "classnames/";
import "./card.scss";
import { CARD_BACK_SIDE_IMG } from "../../../const";

export default function Card({ imgSrc, reveal }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="card-container">
      <div className={classNames({ card: true, flip: !!reveal && isLoaded })}>
        <img
          className="card-back"
          onLoad={() => setIsLoaded(true)}
          src={imgSrc}
          alt="card-img"
        />
        <img className="card-front" src={CARD_BACK_SIDE_IMG} alt="card-img" />
      </div>
    </div>
  );
}
