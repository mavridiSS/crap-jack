import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import Game from "./Game";
import GameContainer from "./Container";

const storeFake = state => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state
  };
};

const mockState = {
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

describe("game", () => {
  let wrapper;
  let component;
  let container;
  let store;

  beforeEach(() => {
    jest.resetAllMocks();

    store = storeFake(mockState);

    wrapper = mount(
      <Provider store={store}>
        <GameContainer />
      </Provider>
    );

    container = wrapper.find(GameContainer);
    component = container.find(Game);
  });

  it("should render  game component", () => {
    expect(component.length).toBeTruthy();
  });
});
