import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Switch, Route } from 'react-router-dom'
import CW from './CounterWidget/CW';
import AddUserComponent from './AddUserComponent/AddUserComponent';
import ViewUserComponent from './ViewUserComponent/ViewUserComponent';
import NotFound from './ErrorPages';

const MainPage = ({ history }) => {
  //if (Object.keys(users).length === 0) {
    history.replace('/collection/add');
  //}

  return (<div className="Main"><h1>Users</h1></div>);
}

const UserList = ({ list }) => {
  return (
    <ul>
      {Object.entries(list).map( ([key, value]) => (
      <li key={key}>
        <NavLink activeClassName='active' to={"/collection/user/" + value.name}>
          <span className='title'>{value.name}</span>           
        </NavLink>
      </li>
      ))}
      
      <li key="add" style={{ borderTop: "1px solid gray" }}>
      <NavLink activeClassName='active' to="/collection/add">
        <span className='title'>+ Add user</span>           
      </NavLink>
      </li>

    </ul>
  );
}

const CollectionPage = ({ users }) => {
  return (
    <>
    <div className='SideBar'>
      <UserList list={users} />
    </div>
    <div className="Main">
      <Switch>
        <Route path="/collection/add" component={AddUserComponent} />
        <Route path="/collection/user/:id" component={ViewUserComponent} />
        <Route path="/collection/cw" component={CW} />
        <Route path="/collection" component={MainPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </>
  );
}

export default connect(state => ({
  users: state.users,
}))(CollectionPage);
