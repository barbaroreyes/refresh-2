import {useState , useEffect} from 'react'
import MeetupList from '../compo/meetups/MeetupList';


const AllMeetups =  () => {
  const [isLoading , setIsLoading] = useState(true)
  const [loadedMeetup , setloadedMeetup] = useState([])
  useEffect(() => {
    setIsLoading(true)
    fetch('https://meetup-80fbe-default-rtdb.firebaseio.com/meetups.json'
    ).then(resp => {
     return resp.json()
    }).then(data => {
      const meetups = [];
      for(  const key in data ) {
        const meetup  ={
          id: key ,
          ...data[key]
        }
        meetups.push(meetup )
      }
    setIsLoading(false)
    setloadedMeetup(meetups)
  
    })

  },[])
  
  if(isLoading){
    return <section>Loading</section>
  }
  
  return (
    <div>
     <h1 className="all"> All Meetups </h1>
    <MeetupList loadedMeetup ={loadedMeetup}/>
    </div>
  );
}

export default AllMeetups;
