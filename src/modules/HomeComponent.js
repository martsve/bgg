import React from 'react';
import { connect } from 'react-redux';

const HomeComponent = (props) => {
  if (Object.keys(props.users).length === 0) {
    props.history.replace('/collection');
  }

  if (Object.keys(props.users).length > 0) {
    props.history.replace('/filter');
  }

  return (
    <>
    <div className="Main">
      <h1>Home</h1>
    </div>
    </>
  );
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(HomeComponent);
