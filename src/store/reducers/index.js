import * as types from "../types/";

const defaultState = {
  isLoading: false,
  deckId: null,
  dealerCards: [],
  playerCards: [],
  reveal: false,
  score: {
    player: 0,
    dealer: 0,
    draw: 0
  }
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.CREATE_DECK:
      return {
        ...state,
        isLoading: true,
        reveal: false
      };
    case types.CREATE_DECK_SUCCESS:
      const { deck_id } = action.payload;
      return {
        ...state,
        deckId: deck_id
      };
    case types.CREATE_DECK_FAIL:
    case types.DRAW_CARDS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case types.DRAW_CARDS_SUCCESS:
      const { cards } = action.payload;
      return {
        ...state,
        dealerCards: cards.slice(0, 3),
        playerCards: cards.slice(3),
        isLoading: false
      };
    case types.REVEAL_CARDS:
      return {
        ...state,
        reveal: true
      };
    case types.SET_GAME_SCORE:
      return {
        ...state,
        score: {
          ...state.score,
          [action.payload]: state.score[action.payload] + 1
        }
      };
    case types.CLEAR_GAME:
      return defaultState;
    default:
      return state;
  }
};

export default rootReducer;
