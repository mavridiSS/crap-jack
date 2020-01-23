import * as types from "../types/";
import { getDrawCardURL } from "../../utils";
const CARD_DECK_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/";

function createDeckFail(error) {
  return {
    type: types.CREATE_DECK_FAIL,
    payload: error
  };
}

function createDeckSuccess(data) {
  return {
    type: types.CREATE_DECK_SUCCESS,
    payload: data
  };
}

function createDeckRequest() {
  return {
    type: types.CREATE_DECK
  };
}

export function createDeck() {
  return dispatch => {
    dispatch(createDeckRequest());

    return fetch(CARD_DECK_URL)
      .then(res => res.json())
      .then(
        data => dispatch(createDeckSuccess(data)),
        error => dispatch(createDeckFail(error))
      );
  };
}

function drawCardsFail(error) {
  return {
    type: types.DRAW_CARDS_FAIL,
    payload: error
  };
}

function drawCardsSuccess(data) {
  return {
    type: types.DRAW_CARDS_SUCCESS,
    payload: data
  };
}

export function drawCards(deckId, cardsCount) {
  return dispatch => {
    const url = getDrawCardURL(deckId, cardsCount);
    return fetch(url)
      .then(res => res.json())
      .then(
        data => dispatch(drawCardsSuccess(data)),
        error => dispatch(drawCardsFail(error))
      );
  };
}

export function startGame() {
  return (dispatch, getState) => {
    return dispatch(createDeck()).then(() => {
      const state = getState();
      console.log(state);
      return dispatch(drawCards(state.deckId));
    });
  };
}

export function revealCards() {
  return {
    type: types.REVEAL_CARDS
  };
}

export function setGameScore(data) {
  return {
    type: types.SET_GAME_SCORE,
    payload: data
  };
}

export function clearGame() {
  return {
    type: types.CLEAR_GAME
  };
}
