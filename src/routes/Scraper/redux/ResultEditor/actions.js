import * as types from './action-types'

export function toggleColumn (key) {
  return {
    type: types.TOGGLE_COLUMN,
    payload: { key }
  }
}

export function toggleMultipleColumns (keys) {
  return {
    type: types.TOGGLE_MULTIPLE_COLUMNS,
    payload: { keys }
  }
}
