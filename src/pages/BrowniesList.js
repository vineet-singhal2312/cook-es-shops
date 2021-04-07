import { BsX } from "react-icons/bs";
import { BrownieMenu } from "../menu/BrownieMenu";
import { useCart } from "../providers/CartContext";
import { RiNavigationLine } from "react-icons/ri";
import { ToggleHeader } from "../components/ToggleHeader";
import { Header } from "../components/Header";
import { SubHeader } from "../components/SubHeader";
import { Footer } from "../components/Footer";
import { ToggleSideNav } from "../components/ToggleSideNav";

export const BrowniesList = () => {
  const { state, dispatch, finalState } = useCart();

  const openRightNav = () => {
    document.getElementById("right-nav-id").style.width = "30%";
  };

  const closeRightNav = () => {
    document.getElementById("right-nav-id").style.width = "0";
  };
  return (
    <>
      <ToggleHeader />
      <ToggleSideNav />
      <Header />
      <SubHeader />

      <button className="filter-nav-button" onClick={() => openRightNav()}>
     
        <RiNavigationLine />
      </button>
      <div className="right-nav" id="right-nav-id">
        <div className="close-icon-div-right-nav">
          <BsX onClick={() => closeRightNav()} size="3rem" />
        </div>
        <div className="filter-div">
          <fieldset className="fieldset">
            <legend>Sort By</legend>
            <div>
              <input
                type="radio"
                onClick={() => dispatch({ type: "HIGH_TO_LOW" })}
                checked={state.isHighToLow}
              />{" "}
              Price- High to Low
            </div>
            <div>
              <input
                type="radio"
                onClick={() => dispatch({ type: "LOW_TO_HIGH" })}
                checked={state.isLowToHigh}
              />{" "}
              Price- Low to High
            </div>
          </fieldset>
        </div>
        <div className="filter-div">
          <fieldset className="fieldset">
            <legend>Sort By</legend>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "READY" })}
                checked={finalState.Ready}
              />{" "}
              Fast pickup's
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "DISCOUNT" })}
                checked={finalState.Discount}
              />{" "}
              Discount
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "POPULOR" })}
                checked={finalState.Populor}
              />{" "}
              Popular cakes
            </div>
          </fieldset>
        </div>
      </div>

      <div className="background-img-div">
        {/* <div className="product-list"></div> */}
        <BrownieMenu />
      </div>
      <Footer />
    </>
  );
};
