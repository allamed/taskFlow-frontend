import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./logo";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, clearStore } from "../features/user/userSlice";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  const { dashBoardText } = useSelector((store) => store.user);
  console.log("this is dash text" + dashBoardText);

  return (
    <Wrapper>
      <div className="nav-center">
        <div style={{ display: "flex" }}>
          <button type="button" className="toggle-btn" onClick={toggle}>
            <FaAlignLeft />
          </button>
          <button
            className="button-81"
            role="button"
            style={{ padding: "7px", marginLeft: "35px", marginBottom: "5px" }}
            onClick={() => navigate(-1)}
          >
            <RiArrowGoBackLine style={{ fontSize: "large" }} />
          </button>
        </div>
        <div>
          <Logo />
          <h3 className="logo-text">{dashBoardText}</h3>
        </div>

        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.nom}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                dispatch(clearStore("Logging out..."));
              }}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
