import {createContext , useState} from 'react';

 const FavoritesContext = createContext({
    favorites:[],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemFavorite: (itemId) => {}
    
 })
 
 export const FavoritesContextProvider = (props)=> {
const [ userFavorites, setUserFavorites] = useState([])
 
const addFavoritesHandler = (favoriteMeetup) => {
    setUserFavorites((prevUsersFavorites)=> {
        return prevUsersFavorites.concat(favoriteMeetup)
    })
}
const removeFavoritesHandler = (meetupId) => {
    setUserFavorites(prevUsersFavorites =>{
        return prevUsersFavorites.filter(meetup => meetup.id !== meetupId)
    })
    
}
const itemFavoriteHandler = (meetupId) => {
    return userFavorites.some(meetup => meetup.id === meetupId)
}

    const context ={
        favorites: userFavorites,
        totalFavorites:userFavorites.length,
        addFavorites: addFavoritesHandler ,
        removeFavorite : removeFavoritesHandler,
        itemfavorite: itemFavoriteHandler

    }
    return <FavoritesContext.Provider value={context}>
          {props.children}
         </FavoritesContext.Provider>
}


export default  FavoritesContext