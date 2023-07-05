import React from 'react'

type ObjectInJSXInputs = {
  obj: object
}

export function UI_ObjectInJSX(props: ObjectInJSXInputs): JSX.Element {
  return <pre>{JSON.stringify(props.obj, null, 2)}</pre>
}
