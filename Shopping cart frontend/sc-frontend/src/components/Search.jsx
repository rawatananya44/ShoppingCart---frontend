import React, { useState } from 'react'

const Search = () => {
    const [keyword, setKeyword] = useState('')

    const searchHandler = (e) =>{
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={searchHandler}>
            <div className='input-group'>
                <input 
                    type='text'
                    id='search_field'
                    className='form-control'
                    placeholder='Enter product name'
                    onChange={(e) => setKeyword(e.target.value)}
                ></input>
                <div className='input-group-append'>
                    <button id='search_btn' className='btn'>
                        <i className='fa fa-search' aria-hidden='true'></i>
                    </button>

                </div>

            </div>
        </form>
    </div>
  )
}

export default Search