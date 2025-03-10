import React from 'react'
import useStyles from 'substyle'

const defaultStyle = {
  fontWeight: 'inherit',
}

function LoadingIndicator({ style, className, classNames }) {
  const styles = useStyles(defaultStyle, { style, className, classNames })
  const spinnerStyles = styles('spinner')
  return (
    <div {...styles}>
      <div {...spinnerStyles}>
        <div {...spinnerStyles(['element', 'element1'])} />
        <div {...spinnerStyles(['element', 'element2'])} />
        <div {...spinnerStyles(['element', 'element3'])} />
        <div {...spinnerStyles(['element', 'element4'])} />
        <div {...spinnerStyles(['element', 'element5'])} />
      </div>
    </div>
  )
}

export default LoadingIndicator
