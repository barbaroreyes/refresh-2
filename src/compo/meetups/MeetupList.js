
import MeetupItem from './MeetupItem'

const MeetupList = ({loadedMeetup}) => {
 console.log(loadedMeetup , 'loadedMeetup')
  return (
    <div>
      {loadedMeetup.map((item ,i)=>{
        
        return (
            <MeetupItem  key={i}{...item}/>
        )

      })}
    </div>
  );
}

export default MeetupList;
