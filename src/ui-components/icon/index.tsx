import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'

export function UI_Icon(props: FontAwesomeIconProps): JSX.Element {
  return <FontAwesomeIcon color='white' {...props} />
}
