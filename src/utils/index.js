import { CARD_DECK_BASE_URL } from "../const";
export const getDrawCardURL = (deckId, cardCount = 6) => {
  return `${CARD_DECK_BASE_URL}/${deckId}/draw/?count=${cardCount}`;
};

const getCardValue = card => {
  return isNaN(card.value) ? 10 : Number(card.value);
};

export const getCardsScore = cards => {
  return cards.reduce((acc, card) => acc + getCardValue(card), 0);
};
