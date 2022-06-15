// 0. create project
// 1. make layout
// 2. divade into components
// 3. static react version
// 4. declare state (what, were) and props
// 5. write logic

// make component of UserList
// make array of users
// put resalt on screen
// make filter
// put count in filter__count
// make components of Filter and User

import React from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = { value: '' };

  handelChange = elem => {
    this.setState({ value: elem.target.value });
    // console.log(this.state.value);
  };

  inputFilter = () =>
    this.props.users.filter(users =>
      users.name.toLowerCase().includes(this.state.value.toLowerCase()),
    );

  render() {
    return (
      <div>
        <Filter
          count={this.inputFilter(this.state.value).length}
          onChange={this.handelChange}
          filterText={this.state.value}
        />

        <ul className="users">
          {this.inputFilter(this.state.value).map(inputFilter => (
            <User key={inputFilter.id} {...inputFilter} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
