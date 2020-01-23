import React from "react";
import { connect } from "react-redux";
import CrapJack from "../Game";
import {
  startGame,
  revealCards,
  setGameScore,
  clearGame
} from "../../../store/actions";

const mapStateToProps = ({
  dealerCards,
  playerCards,
  isLoading,
  deckId,
  reveal,
  score
}) => ({
  dealerCards,
  playerCards,
  isLoading,
  deckId,
  reveal,
  score
});

export default connect(mapStateToProps, {
  startGame,
  revealCards,
  setGameScore,
  clearGame
})(CrapJack);
