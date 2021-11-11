import React from 'react';
import {bool, element, oneOf} from 'prop-types';
import {
  faPlus,
  faMinus,
  faCheck,
  faEraser,
  faTrash,
  faSave,
  faEye,
  faMapMarkerAlt,
  faSync,
  faPen,
  faSearch,
  faCopy,
  faTimes,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Icons = new Map([
  ['plus', faPlus],
  ['minus', faMinus],
  ['check', faCheck],
  ['clear', faEraser],
  ['trash', faTrash],
  ['save', faSave],
  ['eye', faEye],
  ['location', faMapMarkerAlt],
  ['refresh', faSync],
  ['pen', faPen],
  ['search', faSearch],
  ['copy', faCopy],
  ['close', faTimes],
  ['next', faAngleRight],
  ['prev', faAngleLeft],
]);

function Button(props) {
  const disabled = props.loading || props.disabled;

  const Child = ({icon}) => {
    if (icon && props.children) {
      return (
        <div>
          <FontAwesomeIcon icon={icon} />
          <p className="ml-2">{props.children}</p>
        </div>
      );
    } else if (icon && !props.children) return <FontAwesomeIcon icon={icon} />;
    else return props.children;
  };

  const spinner = (
    <svg
      className={`animate-spin h-5 w-5 mr-3 text-white`}
      fill={'none'}
      viewBox={`0 0 24 24`}>
      <path
        className={`opacity-75`}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button disabled={disabled}>
      {props.loading && spinner}
      <Child icon={Icons.get(props.icon)} />
    </button>
  );
}

Button.propTypes = {
  loading: bool,
  disabled: bool,
  children: element,
  icon: oneOf([
    'plus',
    'minus',
    'check',
    'clear',
    'trash',
    'save',
    'eye',
    'location',
    'refresh',
    'pen',
    'search',
    'copy',
    'close',
    'next',
    'prev',
  ]),
};

// function btnStyles(props) {
//     if ()
// }

export default Button;
