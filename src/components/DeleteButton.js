import React from 'react';

function DeleteButton({onDelete, id}){
    return(
        <button className='hapus' onClick={()=> onDelete(id)}>Hapus
        </button>
    )
}

export default DeleteButton;