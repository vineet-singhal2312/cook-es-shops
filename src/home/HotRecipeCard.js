import { hotRecipeData } from "../data/HotRecipeData";

export const HotRecipeMenu = () => {
  return (
    <div className="hot-recipe-menu">
      {hotRecipeData.map((item) => (
        <HotRecipeCard item={item} />
      ))}
    </div>
  );
};

const HotRecipeCard = ({ item }) => {
  return (
    <div className="hot-recipe-card">
      <div className="hot-recipe-card-img-div">
        <img src={item.image[0]} alt="img" className="hot-recipe-card-img" />
      </div>
      <div className="hot-recipe-card-content">
        <h3>{item.name}</h3>
        <h4>{item.price}</h4>
      </div>
    </div>
  );
};