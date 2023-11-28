import styles from './FavoritesCheck.module.scss';
import { parametersNames, settings } from '../../../settings';
import PropTypes from "prop-types";

const FavoritesCheck = props => {

  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const checkIfAlreadyInFavorites = () => {
    for (let singleHit of props.searchResultHits) {
      for (let singleKey of props.favoriteKeys) {
        if (singleHit.recipe.calories === props.favorites[singleKey][parametersNames.recipe][parametersNames.calories]) {
          props.changeButtonStyle(singleHit.recipe.calories);
        }
      }
    }
  }

  (async()=>{
    await sleep(settings.delay);
    checkIfAlreadyInFavorites();
  })()

  return (
    <div>
      <h3 className={styles.favorites_bottom} >That's it.. Lets search again!</h3>
      {props.favoriteKeys.length !== 0 ? <h3>{props.favoriteKeys.length} recipes saved in favorites</h3> : <h3>Let's save something in favorites</h3>}
    </div>
  )
}

FavoritesCheck.propTypes = {
    changeButtonStyle: PropTypes.func.isRequired,
    searchResult: PropTypes.object.isRequired,
    favoriteKeys: PropTypes.array.isRequired,
    favorites: PropTypes.object.isRequired,
};

export default FavoritesCheck;