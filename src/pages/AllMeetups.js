import React from 'react';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

const AllMeetups = () => {
  return (
    <div>
     <h1 className="all"> All Meetups </h1>
     {DUMMY_DATA.map((item,i)=>{
       return (
         <div key={i} className="meetup">
           
           <div className="picture">
           <h2>{item.title}</h2>
           <img src={item.image} alt={item}/>
           <p>{item.description}</p>
           </div>
           
           </div>
       )
     })}
    </div>
  );
}

export default AllMeetups;
