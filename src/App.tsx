import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Button, Input } from '@Components/UI/Atoms'
import { useCreateSpan, useNewStyles } from '@Components/hooks'
export const App = (): React.ReactElement => {
	const [tempText, setTempText] = useState('')
	const [attributeName, setAttributeName] = useState('')
	const [attributeValue, setAttributeValue] = useState('')
	const [toggleEdit, setToggleEdit] = useState(false)
	const blockRef = useRef<HTMLDivElement>(null)
	const onChangeColor = useCallback(() => {
		useNewStyles('color: yellow')
	}, [])

	const onChangeSize = useCallback(() => {
		useNewStyles('font-size: 24px')
	}, [])

	const onChangeBackground = useCallback(() => {
		let test = window.getSelection()
		useNewStyles('background: red')
	}, [])

	const onChangeAttributeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setAttributeName(e.currentTarget.value)
	}, [])
	const onChangeAttributeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setAttributeValue(e.currentTarget.value)
	}, [])
	const onAddAttribute = useCallback(
		() => {
			useNewStyles(`${attributeName}: ${attributeValue}`)
			setAttributeName('')
			setAttributeValue('')
		},
		[attributeValue, attributeName]
	)

	return (
		<div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4, max-content)',
					gridColumnGap: '15px',
				}}
			>
				<Button onClick={onChangeColor}>Change color</Button>
				<Button onClick={onChangeSize}>Change font-size</Button>
				<Button onClick={onChangeBackground}>Change background color</Button>
			</div>
			<div>
				<div style={{margin: '15px 0'}}>Instruction: enter attribute name and value, select text then click "Add attribute"</div>
				<div>
					<span>Attribute name</span>{' '}
					<Input value={attributeName} onChange={onChangeAttributeName} />
				</div>
				<div>
					<span>Attribute value</span>{' '}
					<Input value={attributeValue} onChange={onChangeAttributeValue} />
				</div>
				<Button onClick={onAddAttribute}>Add attribute</Button>
			</div>
			<div
				ref={blockRef}
				style={{ marginTop: '50px', outline: 'none', width: 'max-content' }}
				onClick={() => setToggleEdit(!toggleEdit)}
				tabIndex={0}
				contentEditable={toggleEdit ? 'true' : 'false'}
				suppressContentEditableWarning={true}
			>
				Our text. Click on me for edit.
			</div>
		</div>
	)
}
