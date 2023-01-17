import React from 'react';
import TagItem from './TagItem';

function TagList({ notes, onDelete}){
    return(
        <div className='list'>
            <div className='isi-list'>
            {
            notes.map((note)=>(
                <TagItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                 {...note}/>
            ))
        }
            </div>
    </div>
    )
}

export default TagList;