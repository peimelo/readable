import PropTypes from 'prop-types';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Moment from 'react-moment';

function TimestampIcon({ timestamp }) {
  return (
    <span>
      <FaCalendarAlt size={15} />&nbsp;
      <Moment format="DD/MM/YYYY">
        {timestamp}
      </Moment>
    </span>
  );
}

TimestampIcon.propTypes = {
  timestamp: PropTypes.number.isRequired
};

export default TimestampIcon
