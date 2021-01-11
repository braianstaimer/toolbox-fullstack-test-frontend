import * as Actions from "../actions/iecho.actions";
import { textInterface } from "../../models";

const initialState = {
  items: [],
  textDetails: textInterface(),
};

const iechoReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.CHANGE_KEY_FORM: {
      return {
        ...state,
        textDetails: { ...state.textDetails, ...action.payload },
      };
    }
    case Actions.SET_INVERTED_TEXT: {
      //agregar el nuevo elemento a la lista
      const items = [...state.items, textInterface(action.payload)];
      return {
        ...state,
        items,
        textDetails: textInterface(),
      };
    }
    default: {
      return state;
    }
  }
};

export default iechoReducer;
