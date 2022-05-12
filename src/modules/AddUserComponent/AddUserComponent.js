import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import AddUserWidget from './AddUserWidget';

const AddUserComponent = ({ users, history }) => {
  const dispatch = useDispatch();

  const addUser = (name) => {
    dispatch({ type: "ADDUSER", value: name });
    history.push('/collection/user/' + name);
  }
  return (
    <>
    <h1>Add data for a new user</h1>
    <AddUserWidget addUser={addUser} />
    </>
  );
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(AddUserComponent);
