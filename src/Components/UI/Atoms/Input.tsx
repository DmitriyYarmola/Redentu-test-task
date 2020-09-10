import React from 'react'

interface PropsType {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input: React.FC<PropsType> = ({ value, onChange }): React.ReactElement => {
	return <input value={value} onChange={onChange} />
}
