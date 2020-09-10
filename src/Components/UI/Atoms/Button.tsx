import React from 'react'

interface PropsType {
	children: React.ReactNode
	onClick?: (e?: any) => void
}
export const Button: React.FC<PropsType> = ({
	children,
	onClick,
}): React.ReactElement => {
	return <button onClick={onClick}>{children}</button>
}
