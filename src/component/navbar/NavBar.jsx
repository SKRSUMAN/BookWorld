import React, { useRef, useState } from "react";
import "./Style.css";
import { useNavigate } from "react-router";
import { addSearchProduct, updateQuery } from "../../redux/SearchRedux";
import { useDispatch, useSelector } from "react-redux";
import { BiHistory } from "react-icons/bi";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const catMenu = useRef(null);
  const search = useSelector((state) => state.search);
  const [value, setValue] = useState("");
  const [hide, setHide] = useState(true);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.target.value !== "" && e.key === "Enter") {
      dispatch(updateQuery(e.target.value));
      if (window.location.pathname !== "/products") {
        navigate("/products");
      }
      dispatch(addSearchProduct(e.target.value));
      setHide(true);
    }
  };

  const closeOpenMenus = (e) => {
    if (catMenu.current && hide && !catMenu.current.contains(e.target)) {
      setHide(true);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  return (
    <div style={{ width: "100%", height: "60px" }}>
      <header>
        <div onClick={() => navigate("/")} className="logo_Container">
          <div className="logo">
            <h2>
              <span>B</span>ook
              <span>W</span>orld
            </h2>
          </div>
        </div>

        <div className="search_container">
          <input
            ref={catMenu}
            onClick={() => {
              setHide(false);
            }}
            onChange={(e) => {
              handleChange(e);
            }}
            onKeyDown={(e) => handleEnter(e)}
            className="search"
            placeholder="Search by Title, Author, Publisher..."
            type="text"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
          <div
            className="recent_search"
            style={{ display: hide === false ? "block" : "none" }}
            ref={catMenu}
          >
            {search.searchList &&
              search.searchList.map((item) => {
                return (
                  <div
                    onClick={() => {
                      dispatch(updateQuery(item));
                      navigate("/products");
                      setHide(true);
                    }}
                    className="recent_list"
                  >
                    <BiHistory />
                    <p>{item}</p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="loginbtn_container">
          <a href="/login">Login</a>
        </div>

        <div onClick={() => navigate("/cart")} className="card_link">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>Cart</p>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
