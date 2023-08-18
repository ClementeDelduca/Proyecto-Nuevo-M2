import style from './Card.module.css'
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

export function Card(props) {
   const [isFav, setIsFav] = useState(props.fav);

   useEffect(() => {
      props.favorites &&
        props.favorites.forEach((fav) => {
          if (fav.id === props.id) {
            setIsFav(true);
          }
        });
    }, [props.favorites]);


   function handleFavorite() {
      if (isFav) {
        setIsFav(false);
        props.removeFav(props.id);
      } else {
        setIsFav(true);
        props.addFav({
          name: props.name,
          species: props.species,
          gender: props.gender,
          image: props.image,
          status: props.status,
          origin: props.origin,
          id: props.id,
        });
      }
    }

   return (
 
 <div className={style.DivCard}>

<table>
  <tr>
    <td>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
    </td>
    <td>
      <button className={style.Button} onClick={props.onClose}>X</button>
    </td>
  </tr>
</table>

        
        <div style={{position: 'relative' }}><img src={props.image} alt='' />
               <h4 style={{ 
                  position: 'absolute', 
                  top: 226, 
                  left:0,
                  backgroundColor: 'transparent',
                  color: 'black', 
                  padding: '10px',
                  margin: 0,


            }}>
            <Link to={`/detail/${props.id}`} style={{ textDecoration: "none", color: "Black" }}><h2>{props.name}</h2></Link>
            </h4>
         </div>

         
         
<table>
  <tr>
    <td>
      <h4 className={style.Gender }>{props.gender}</h4>
    </td>
    <td>
      <h4 sclassName={style.Genders}>{props.id}</h4>
    </td>
  </tr>
</table>
         
         
      </div>
   );
}

export function mapStateToProps(state) {
   return {
     favorites: state.favorites,
   };
 }
 
 export function mapDispatchToProps(dispatch) {
   return {
     addFav: function (personaje) {
       dispatch(addFav(personaje));
     },
     removeFav: function (id) {
       dispatch(removeFav(id));
     },
   };
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);