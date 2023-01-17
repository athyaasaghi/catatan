import React from 'react';

function TagDaftartulisan({title, body, createdAt}){

    return(
        <div className="card">
            <div className="text">
                <p>{createdAt}</p>
                <h2>{title}</h2>
                <h3>{body}</h3>
            </div>
    </div>
    )
}

export default TagDaftartulisan;