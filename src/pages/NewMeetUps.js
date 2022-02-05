import NewMeetuPForm from './NewMeetUpsFomr';

const NewMeetuP = () => {
 
  const addMeetUp = (meetupData) => {
   fetch('https://meetup-80fbe-default-rtdb.firebaseio.com/meetups.json', {
     method: 'Post',
     body: JSON.stringify(meetupData) ,
     headers: {
        'Content-Type': 'application/json'}
   })
  }
  return (
    <section>
     <NewMeetuPForm  onAddMeetUp={addMeetUp}/>
    </section>
  );
}

export default  NewMeetuP;
