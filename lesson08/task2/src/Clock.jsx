import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  };

  render() {
    return (
      <>
        <div className="clock">
          <div className="clock__location">{this.props.location}</div>
          <div className="clock__time">
            {moment(this.getTimeWithOffset(this.props.offset)).format('hh:mm:ss A')}
          </div>
        </div>
      </>
    );
  }
}

export default Clock;
//   <div className="clock">
//     <div className="clock__location">
//       {/* <!-- название города --> */}
//       New York
//     </div>
//     <div className="clock__time">
//       {/* <!-- локальное время в этом городе (с учером переданного смещения) --> */}
//       7:00:51 AM
//     </div>
//   </div>
