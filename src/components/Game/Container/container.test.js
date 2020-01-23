import React from "react";
import { Provider } from "react-redux";
import Game from "../Game";
import GameContainer from "./index";
import { mount } from "enzyme";

// jest.mock("../App");

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

describe("game container", () => {
  let wrapper;
  let component;
  let container;

  beforeEach(() => {
    jest.resetAllMocks();

    const store = storeFake(mockState);

    wrapper = mount(
      <Provider store={store}>
        <GameContainer />
      </Provider>
    );

    container = wrapper.find(GameContainer);
    component = container.find(Game);
  });

  it("should render both the container and the component ", () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it("should map state to props", () => {
    const expectedPropKeys = [
      "dealerCards",
      "playerCards",
      "isLoading",
      "deckId",
      "reveal",
      "score"
    ];

    expect(Object.keys(component.props())).toEqual(
      expect.arrayContaining(expectedPropKeys)
    );
  });

  it("should map dispatch to props", () => {
    const expectedPropKeys = ["startGame", "revealCards", "setGameScore"];

    expect(Object.keys(component.props())).toEqual(
      expect.arrayContaining(expectedPropKeys)
    );
  });
});
