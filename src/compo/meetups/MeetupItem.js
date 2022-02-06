import {useContext} from 'react';
import Card from '../ui/Card';
import FavoritesContext from '../../compo/store/favorites-context';

const MeetupItem = (props) => {
    
 const favoritesContx = useContext(FavoritesContext);

 const itemFavorite = favoritesContx.itemfavorite(props.id);

 const togleFavoritesStatushandler  = () => {
     if(itemFavorite){
         favoritesContx.removeFavorite(props.id)
     }else{
         favoritesContx.addFavorite({
             id: props.id,
             title:props.title,
             description:props.description,
             address:props.address,
             image:props.image,


         });
     }

 
 }
  return (
    <Card>
           
           <div className="picture">
               <span>{props.id}</span>
           <h2 className='meet-up-name'>{props.title}</h2>
           <img src={props.image} alt='item'/>
           <address>{props.address}</address>
           <p>{props.description}</p>
           
        <button className='picture-btn' onClick={togleFavoritesStatushandler}>To Favorites</button>
           
           </div>
           
           </Card>
  );
}

export default MeetupItem;
