import React from 'react';

const MeetupItem = (props) => {
console.log(props.item)
  return (
    <div  className="meetup">
           
           <div className="picture">
           <h2 className='meet-up-name'>{props.title}</h2>
           <img src={props.image} alt='item'/>
           <p>{props.description}</p>
           </div>
           
           </div>
  );
}

export default MeetupItem;
