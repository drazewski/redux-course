export const CURRENT_UPDATE = 'CURRENT_UPDATE'
export const IS_COMPLETE = 'IS_COMPLETE'

export function updateCurrent(val) {
	return{
		type: CURRENT_UPDATE,
		value: val 
	}
}

export function isComplete(id) {
  return{
    type: IS_COMPLETE,
    ids: id - 1
  }
}