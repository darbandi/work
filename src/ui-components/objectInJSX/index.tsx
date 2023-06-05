import React from 'react'

type ObjectInJSXInputs = {
  obj: object
}

export function ObjectInJSX(props: ObjectInJSXInputs): React.JSX.Element {
  return <pre>{JSON.stringify(props.obj, null, 2)}</pre>
}
