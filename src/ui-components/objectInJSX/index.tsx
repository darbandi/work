import React from 'react'

type Props = {
  obj: object
}

export function ObjectInJSX(props: Props): React.JSX.Element {
  return <pre>{JSON.stringify(props.obj, null, 2)}</pre>
}
