'use strict';

import type { Action } from '../actions/types';

export type Config = {
  wifiNetwork: string;
};

const initialState: Config = {
  wifiNetwork: '',
};

function config(state: Config = initialState, action: Action): Config {
  if (action.type === 'LOADED_CONFIG') {
    return {
      wifiNetwork: 'testing 123',
    };
  }

  return state;
}

module.exports = config;