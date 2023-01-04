import React from 'react';
import PropTypes from 'prop-types';

function PaginationFromHydraView() {

  return {
    current: '@id'.split('page='),
    first: 'hydra:first'.split('page='),
    previous: 'hydra: previous'.split('page='),
    next: 'hydra: next'.split('page='),
    last: 'hydra: last'.split('page='),
  };
}

PaginationFromHydraView.prototype = {
  current: PropTypes.number,
  first: PropTypes.number,
  previous: PropTypes.number,
  next: PropTypes.number,
  last: PropTypes.number,

};

PaginationFromHydraView.defaultProps = {
  current: null,
  first: null,
  previous: null,
  next: null,
  last: null,
};
