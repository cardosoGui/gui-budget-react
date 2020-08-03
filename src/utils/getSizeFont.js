export const getSizeFont = (size) => {
	switch (size) {
		case 'big':
			return '30px'
		case 'large':
			return '24px'
		case 'medium':
			return '18px'
		case 'small':
			return '14px'
		case 'xsmall':
			return '12px'

		default:
			return '14px'
	}
}
