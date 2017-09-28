import { Action } from '@ngrx/store'

export const LOAD = '[Study][Compliance] LOAD'
export const LOAD_SUCCESS = '[Study][Compliance] LOAD_SUCCESS'

export class Load implements Action {
  readonly type = LOAD

  constructor(public payload: any) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS

  constructor(public payload: any) {} // TODO: Change to Compliance[] type
}

export type Actions = Load | LoadSuccess
