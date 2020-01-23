import React, { useEffect } from "react";
import Player from "./Player";
import BorderLine from "../UI/BorderLine";
import { getCardsScore } from "../../utils";
import "./game.scss";
import Loading from "../UI/Loading";

const CrapJack = ({
  playerCards,
  dealerCards,
  startGame,
  reveal,
  revealCards,
  setGameScore,
  score,
  clearGame,
  isLoading
}) => {
  useEffect(() => {
    startGame();

    return () => {
      clearGame();
    };
  }, [startGame, clearGame]);

  const onReveal = () => {
    revealCards();

    const playerScore = getCardsScore(playerCards);
    const dealerScore = getCardsScore(dealerCards);

    const isDraw =
      playerScore === dealerScore || (playerScore > 21 && dealerScore > 21);

    setGameScore(
      isDraw
        ? "draw"
        : (playerScore > dealerScore && playerScore < 22) || dealerScore > 21
        ? "player"
        : "dealer"
    );
  };

  const gameScore = `Score: \n
  Player-${score.player}
  Dealer-${score.dealer}
  Draw-${score.draw}`;
  if (isLoading) return <Loading />;
  return (
    <div className="table">
      <Player cards={playerCards} />
      <BorderLine />
      <Player type="dealer" cards={dealerCards} reveal={reveal} />
      <div className="container">
        {!reveal ? (
          <button id="reveal" onClick={onReveal}>
            Reveal
          </button>
        ) : (
          <button id="deal" onClick={startGame}>
            Deal
          </button>
        )}
      </div>
      <div className="score">
        <p>{gameScore}</p>
      </div>
    </div>
  );
};

export default CrapJack;
