import React from 'react'
import { useDeck } from 'mdx-deck'

export const Counter = () => {
    const state = useDeck()

	console.log({state})
    return (
		<p>{state.index} / {state.length - 1}</p>
    )
}
