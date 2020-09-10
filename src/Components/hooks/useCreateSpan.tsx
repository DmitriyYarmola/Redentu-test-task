import React from 'react'

export const useCreateSpan = () => {
    let selection
		if (window.getSelection()) {
			selection = window.getSelection()?.getRangeAt(0)
		}
	const selectedText = selection?.extractContents()
	const span = document.createElement('span')
    span.append(selectedText || '')
	selection?.insertNode(span)
    return { span, selection, selectedText }
}