import React from 'react'

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

export function Icon(props: FontAwesomeIconProps): React.JSX.Element {
  return <FontAwesomeIcon color='white' {...props} />
}