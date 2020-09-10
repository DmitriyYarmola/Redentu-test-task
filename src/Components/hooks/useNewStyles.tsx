import React from 'react'
import { useCreateSpan } from './useCreateSpan'
interface PropsType {
    newStylesFrom: string
}
export const useNewStyles = (newStylesFrom: string) => {
    let test = window.getSelection()
    if(test?.anchorNode?.parentElement?.localName === 'span') {
		const stylesParentSpan = test?.anchorNode?.parentElement?.getAttribute('style')
		const newStyles = `${stylesParentSpan} ${newStylesFrom};`
		const { span, selection, selectedText } = useCreateSpan()
		span.style.cssText  = `${newStyles}`
        test?.anchorNode?.parentNode?.parentNode?.removeChild(test?.anchorNode?.parentElement)
            span.append(selectedText || '')
	    selection?.insertNode(span)
	} else {
		const { span, selection, selectedText } = useCreateSpan()
		span.style.cssText = `${newStylesFrom};`
	}
}