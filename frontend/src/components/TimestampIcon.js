import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Calendar from 'react-icons/lib/fa/calendar';

function TimestampIcon({ timestamp }) {
  return (
    <span>
      <Calendar size={15} />&nbsp;
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
