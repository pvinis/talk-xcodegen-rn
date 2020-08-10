import React from 'react'
import { useSteps } from 'mdx-deck'


/**
 * Reverse Appear
 */
export const RAppear = props => {
    const children = React.Children.toArray(props.children)
    const length = children.length
    const step = useSteps(length)
    const styled = children.map((child, i) =>
        React.cloneElement(child, {
            style: {
                visibility: length - i - 1 < step ? 'visible' : 'hidden',
            },
        })
    )

    return <>{styled}</>
}
