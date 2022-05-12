import React, { useState } from 'react';

const AddUserWidget = ({ addUser }) => {
  const [name, setName] = useState("");  

  let onClickAddUser = () => {
    addUser(name);
    setName("");
  };

  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)} /> <button onClick={onClickAddUser}>Add</button>
    </div>
  );
}

export default AddUserWidget;