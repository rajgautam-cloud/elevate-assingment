import React, { useEffect, useState } from "react";
import "./MainBanner.styles.css";
import Header from "../Header/Header";
import toggleIcon from "../../assets/toggle-icon.png";
import searchIcon from "../../assets/searchIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";
import userIcon from "../../assets/userIcon.svg";
import flag from "../../assets/flag-uk.png";
import Products from "../Products/Products.component";
const MainBanner = () => {
  //all states
  const [showSidebar, setShowSidebar] = useState(false);
  const [category, setCategory] = useState("All Products");
  const [products, setProducts] = useState(null);
  const [searchText, setSearchText] = useState("");

  //functions
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products/${
        category == "All Products" ? " " : `/category/${category}`
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [category, searchText]);
  useEffect(() => {
    const data = products?.filter((product) => {
      return (
        product.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
    });
    setProducts(data);
  }, [searchText]);
  return (
    <div className="">
      <div className="main_banner_container">
        <div className="mx-3">
          <Header />
        </div>
        <div className="py-3">
          <h1 className="logo">Eflyer</h1>
        </div>
        <div className="section1">
          <div className="container">
            <div className="content_main">
              {showSidebar ? (
                <div className="sidenav">
                  <p
                    className="closebtn"
                    onClick={() => {
                      toggleSidebar();
                    }}
                  >
                    &times;
                  </p>
                  <p onClick={() => setCategory("All Products")}>Home</p>
                  <p onClick={() => setCategory("men's clothing")}>Fashion</p>
                  <p onClick={() => setCategory("electronics")}>Electronic</p>
                  <p onClick={() => setCategory("jewelery")}>Jewellery</p>
                </div>
              ) : null}
              <span className="toggle_icon">
                <img
                  src={toggleIcon}
                  className="px-2"
                  onClick={() => {
                    toggleSidebar();
                  }}
                />
              </span>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  style={{ backgroundColor: " #2b2a29" }}
                >
                  All Category
                </button>
              </div>
              <div className="main">
                <div className="" style={{ display: "flex" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search your product"
                    style={{
                      borderTopRightRadius: "0",
                      borderBottomRightRadius: "0",
                    }}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                      console.log(e.target.value);
                    }}
                  ></input>
                  <div className="px-0">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      style={{
                        borderTopLeftRadius: "0",
                        borderBottomLeftRadius: "0",
                        backgroundColor: "#f26522",
                        border: "none",
                      }}
                    >
                      <img src={searchIcon} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="dropdown ">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                  }}
                >
                  <img src={flag} />
                  <span className="px-1">English</span>
                </button>
              </div>
              <div className="header_box ">
                <div className="login_menu">
                  <ul>
                    <li className="px-3">
                      <a href="#">
                        <img src={cartIcon} className=" px-1" />
                        <span className="">Cart</span>
                      </a>
                    </li>
                    <li className="pr-3">
                      <a href="#">
                        <img src={userIcon} className=" px-1" />
                        <span className="">Cart</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            paddingTop: "10%",
            textAlign: "center",
          }}
        >
          <h1 className=" banner_text">
            Get Start<br></br>Your favourite shopping
          </h1>
          <button className="btn btn-secondary buy_now_btn">
            <span className="px-3 py-2 btn_text">Buy Now</span>
          </button>
        </div>
      </div>
      <Products products={products} category={category} />
    </div>
  );
};

export default MainBanner;
