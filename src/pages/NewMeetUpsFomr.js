import React from 'react';
import Card from '../compo/ui/Card';

const NewMeetuPForm = () => {
  return (
    <Card>
     <div>
     <h1>Add a new meetup</h1>
      <form>
        <div className="control">
         <label htmlFor='title'>Meetup  Title</label>
         <input type='text' required id='title'/>
        </div>
        <div className="control">
         <label htmlFor='image'>Meetup  Image</label>
         <input type='url' required id='image'/>
        </div>
        <div className="control">
         <label htmlFor ='address'>Meetup  Address</label>
         <input type='text' required id='address'/>
        </div>
        <div className="control">
         <label htmlFor ='description'>Meetup  Description</label>
         <textarea id='description' required rows='5'></textarea>
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
