import React from 'react';

const UserForm = ({ userData, handelChange }) => (
  <form className="user-form">
    <input
      type="text"
      name="firstName"
      className="user-form__input"
      value={userData.firstName}
      onChange={handelChange}
    />
    <input
      type="text"
      name="lastName"
      className="user-form__input"
      value={userData.lastName}
      onChange={handelChange}
    />
  </form>
);

export default UserForm;
