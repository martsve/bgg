import React from 'react';
import { connect } from 'react-redux';
import { FilterCollectionWidget, applyFilters, getDefaultFilters } from './FilterCollectionWidget';
import { CreateCollectionFromUserDetails } from './CreateGameDataUtility';
import { GameDataCard } from './GameDataCard';

const AddUsersComponent = ({ activeClass, action, name }) => {
  return (<><button className={activeClass} onClick={action}>{name}</button></>);
}

const GamesComponent = ({ list, sort }) => {
  if (!list) return (<></>);
  sort = sort || "rank,asc";
  let sortBy = sort.split(',')[0];
  let desc = sort.split(',')[1] === "desc";
  let up = desc ? -1 : 1
  let down = desc ? 1 : -1
  if (sortBy === "rank")  list.sort((a, b) => a.rank > b.rank ? up : down);
  if (sortBy === "rating")  list.sort((a, b) => a.rating > b.rating ? up : down);
  if (sortBy === "numowned")  list.sort((a, b) => a.numowned > b.numowned ? up : down);
  
  if (sortBy === "playtime")  list.sort((a, b) => a.playtime > b.playtime ? up : down);
  if (sortBy === "weight")  list.sort((a, b) => a.weight > b.weight ? up : down);
  if (sortBy === "year")  list.sort((a, b) => a.year > b.year ? up : down);
  if (sortBy === "name")  list.sort((a, b) => a.name > b.name ? up : down);

  return (<ul>{list.map(x => (<li key={x.id}>{<GameDataCard data={x} />}</li>))}</ul>);
};

const FilterCollectionComponent = ({ users, active, history, dispatch, location, match, details, collection, sort }) => {
  if (Object.keys(users).length === 0) {
    history.replace('/collection');
  }

  var filterList = (location.search && location.search.replace('?', '').split('&').map(x => x.split('=')).map(x => ({ key: x[0], value: decodeURIComponent(x[1]).split(',') }))) || getDefaultFilters();
  // eslint-disable-next-line
  var filters = filterList.reduce((a, b) => (a[b.key] = b.value, a), {});

  var selectedUsers = (match.params.users && match.params.users.split(',')) || [];

  if (selectedUsers.length === 0 && active.length > 0) {
    history.replace('/filter/' + active.join(','));
    return <></>;
  }

  let activeStateDetails = Object.entries(details).map(x => ({ user: x[0], active: selectedUsers.indexOf(x[0]) > -1, dbKey: x[1] }));

  if (selectedUsers.length && match.params.users !== active.join(',')) {
    dispatch({ type: "SET_ACTIVE", value: selectedUsers });
    CreateCollectionFromUserDetails(activeStateDetails.filter(x => x.active).map(x => x.dbKey), x => dispatch({ type: "SET_COLLECTION", value: x }));
  }

  const add_active = (user) => {
    let x = [...active, user];
    history.replace('/filter/' + x.join(',') + location.search);
  }

  const rem_active = (user) => {
    let x = active.filter(x => x !== user);
    history.replace('/filter/' + x.join(',') + location.search);
  }

  let filteredCollection = applyFilters(collection, filters);

  return (
    <div className="Main">
      <h2>Change Collection</h2>
      <div className="userlist">
        {activeStateDetails.map(x => (<AddUsersComponent activeClass={x.active ? "active" : null} key={x.user} action={() => x.active ? rem_active(x.user) : add_active(x.user)} name={x.user} />))}
      </div>
      <h2>Add Filter</h2>
      <FilterCollectionWidget filters={filters} change={(q) => history.push(location.pathname + '?' + q)} />
      <div className="gamelist">
        <h2>Games</h2>
        <div className='sortbar'>Sorty by <select value={sort} onChange={(e) => dispatch({ type: "SET_SORT", value: e.target.value})}>
                  <option value="rank,asc">Ranking</option>
                  <option value="rating,desc">Own Rating</option>
                  <option value="numowned,desc">Popularity</option>
                  <option value="playtime,asc">Play time</option>
                  <option value="weight,asc">Weight</option>
                  <option value="year,desc">Release year</option>
                  <option value="name,asc">Name</option>
               </select></div>
        <GamesComponent list={filteredCollection} sort={sort}  />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users,
  active: state.active,
  details: state.details,
  collection: state.collection,
  sort: state.sort,
});

export default connect(mapStateToProps)(FilterCollectionComponent);
