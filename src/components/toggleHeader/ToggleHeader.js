import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";

export const ToggleHeader = () => {
  const openSideNav = () => {
    document.getElementById("side-nav-id").style.width = "90%";
  };
  return (
    <>
      <header className="toggle-header">
        <Link to="/" className="header-top-left-element link">
          <img
            src="/./images/company-logo.png"
            alt="img"
            className="header-logo-img"
          />
        </Link>
        <div className="toggle-button-div">
          <FiAlignJustify
            className="toggle-button"
            onClick={() => openSideNav()}
          />
        </div>
      </header>
    </>
  );
};
