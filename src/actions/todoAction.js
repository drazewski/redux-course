export const CURRENT_UPDATE = 'CURRENT_UPDATE'

export function updateCurrent(val) {
	return{
		type: CURRENT_UPDATE,
		value: val 
	}
}
