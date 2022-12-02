import React from 'react';


function User (props) {
 
// function setTrue(e) {
//     var id = e.target.dataset.id;
//     data[id].status = !data[id].status;
//     setData([...data])
// }

const { userName, handleDelete, index } = props;
  return (
    <>
      <div className="display">
        <input type="checkbox"/>
        <div>{userName}</div>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </div>
    </>
  );
}

export default User