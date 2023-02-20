import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./logo";
import NavLinks from "./NavLinks";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../utils/utilsFunctions";
import React, { useEffect, useState } from "react";
import { urlBase } from "../utils/axios";
import {
  getUserParticipationProjects,
  setDashboardText,
} from "../features/user/userSlice";
import { getUserFromLocalStorage } from "../utils/localStorage";

const UserAvatar = ({ id, nom }) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    getUserImage(id);
  }, []);

  const getUserImage = (id) => {
    fetch(`${urlBase}/image/info/${id}`)
      .then((response) => {
        if (response.ok) return response.blob();
        return;
      })
      .then((blob) => {
        if (blob) {
          const urlx = URL.createObjectURL(blob);

          setUrl(urlx);
        }
      })
      .catch((error) => {
        return null;
      });
  };

  return url ? (
    <Avatar src={url} key={id} />
  ) : (
    <Avatar {...stringAvatar(nom)} key={id} />
  );
};
export default UserAvatar;
