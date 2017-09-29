import { Action } from '@ngrx/store'

import { Study } from '../../../shared/models/study.model'

export const SET_STUDY_ID = '[StudyPage][Study] SET_STUDY_ID'
export const LOAD_STUDY_BY_ID = '[StudyPage][Study] LOAD_STUDY_BY_ID'
export const LOAD_STUDY_BY_ID_SUCCESS =
  '[StudyPage][Study] LOAD_STUDY_BY_ID_SUCCESS'
export const LOAD_STUDY_BY_ID_FAIL = '[StudyPage][Study] LOAD_STUDY_BY_ID_FAIL'

export class SetStudyId implements Action {
  readonly type = SET_STUDY_ID

  constructor(public payload: string) {}
}
export class LoadStudyById implements Action {
  readonly type = LOAD_STUDY_BY_ID

  constructor(public payload: string) {}
}

export class LoadStudyByIdSuccess implements Action {
  readonly type = LOAD_STUDY_BY_ID_SUCCESS

  constructor(public payload: Study) {}
}

export class LoadStudyByIdFail implements Action {
  readonly type = LOAD_STUDY_BY_ID_FAIL
}

export type Actions =
  | SetStudyId
  | LoadStudyById
  | LoadStudyByIdSuccess
  | LoadStudyByIdFail
