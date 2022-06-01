import React from 'react';
import moment from 'moment';

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile__name">
        {props.firstName} {props.lastName}
      </div>
      <div className="profile__birth">
        Wos born {moment(props.birthDate).format('DD MMM YY')} in {props.birthPlace}
      </div>
    </div>
  );
}

export default Profile;
