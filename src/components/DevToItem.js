import React from 'react';

const DevToItem = props => {
    const {title, image, user, link}
return(
    <div>
        <h2><a href={link}>{title}</a></h2>
    <img src={image} alt={title}/>
    </div>
)
}
export default DevToItem;