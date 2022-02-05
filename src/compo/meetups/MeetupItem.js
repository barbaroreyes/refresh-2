import React from 'react';

const MeetupItem = (props) => {

  return (
    <div  className="meetup">
           
           <div className="picture">
               <span>{props.id}</span>
           <h2 className='meet-up-name'>{props.title}</h2>
           <img src={props.image} alt='item'/>
           <address>{props.address}</address>
           <p>{props.description}</p>
           
        <button className='picture-btn'>To Favorites</button>
           
           </div>
           
           </div>
  );
}

export default MeetupItem;
