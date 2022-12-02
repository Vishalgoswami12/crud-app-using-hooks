import React from 'react'



function Form ({ handleSubmit, handleChange , user}){

    

    return (
        <>
        <div className='center'>
          <form onSubmit={handleSubmit}>
            <input
              type="text" value={user}
              placeholder="Add todo..."
              onChange={handleChange}
            />
          </form>
          </div>
        </>
      );
}

export default Form;