import React from 'react';
import TagDaftarTulisan from './TagDaftarTulisan';
import DeleteButton from './DeleteButton';

function TagItem({title, body, onDelete, id}){
    return(
        <div className='item'>
            <TagDaftarTulisan title={title} body={body}/>
            <DeleteButton onDelete={onDelete} id={id}/>
        </div>
    )
}

export default TagItem;