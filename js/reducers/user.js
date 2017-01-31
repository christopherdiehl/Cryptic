'use strict';

export type UserState = {
  isLoggedIn: boolean;
  id: ?string;
  name: ?string;
};

const InitialState = {
  isLoggedIn: false,
  id: null,
  name: null
};

function user (state: State = initialState, action: Action): State {
  
}