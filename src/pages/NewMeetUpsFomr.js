import React,{useRef} from 'react';
import Card from '../compo/ui/Card';

const NewMeetuPForm = () => {
 const titleInput = useRef()
 const imageInput = useRef()
 const addressInput = useRef()
 const descriptionInput = useRef()
 
  const submitHandler = (e) => {
    e.preventDefault();

 const enterredTitle = titleInput.current.value;
 const enterredImage = imageInput.current.value;
 const enterredAddress = addressInput.current.value;
 const enterredDescription = descriptionInput.current.value;

 const meetupData = {
  title: enterredTitle,
  image : enterredImage,
  address: enterredAddress,
  description: enterredDescription
}
 
console.log(meetupData)
  }

  
  return (
    <Card>
     <div>
     <h1>Add a new meetup</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
         <label htmlFor='title'>Meetup  Title</label>
         <input type='text' required id='title' ref={titleInput}/>
        </div>
        <div className="control">
         <label htmlFor='image'>Meetup  Image</label>
         <input type='url' required id='image' ref={imageInput}/>
        </div>
        <div className="control">
         <label htmlFor ='address'>Meetup  Address</label>
         <input type='text' required id='address' ref={addressInput}/>
        </div>
        <div className="control">
         <label htmlFor ='description'>Meetup  Description</label>
         <textarea id='description' required rows='5' ref={descriptionInput}></textarea>
        </div>
        <div className="actions">
          <button type>Add Meetup</button>
        </div>
        
      </form>
     </div>

    </Card>
  );
}

export default  NewMeetuPForm;
