import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NotFound from '../ErrorPages';
import GetBggDataWidget from './GetBggDataWidget';

const ViewUserComponent = ({ match, users, dispatch, history }) => {
  let [id, setId] = useState("");

  useEffect(() => {
    setId(match.params.id);
  }, [match]);

  var user = users[id];
  if (!user) {
    return <NotFound />
  }

  const delUser = () => {
    dispatch({ type: "DELETE_USER", value: id });
    history.replace('/collection/add');
  }

  return (
    <>
    <h1>{user.name}</h1>
    <GetBggDataWidget history={history} save={(value) => dispatch({ type: "SAVE", user: id, value })} name={user.name} />

    <div style={{ marginTop: "30px" }}><button onClick={delUser}>Remove user</button></div>
    </>
  );
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(ViewUserComponent);
