import React, { Component } from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: this.props.timeZone,
    };

    // Bad practis use setIntercal into constructor

    setInterval(() => {
      this.setState({});
    }, 1000);
  }

  render() {
    return (
      <>
        <div className="clock">
          <div className="clock__location">{this.props.city}</div>
          <div className="clock__time">
            {moment(getTimeWithOffset(this.props.timeZone)).format('hh:mm:ss A')}
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
