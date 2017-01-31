export type Action = 
  {type: 'LOADED_CONFIG', config: ?string} |
  {type: 'LOGGED_IN', source: ?string; data: {id: string; name: string;}}
  ;

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;