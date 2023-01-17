import React from 'react';

function TagDaftartulisan({title, body}){

    return(
        <div className="card">
            <div className="text">
                <h2>{title}</h2>
                <h3>{body}</h3>
            </div>
    </div>
    )
}

export default TagDaftartulisan;