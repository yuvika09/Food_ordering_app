import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
    <hr />
      <span>All rights reserved by</span>
      <div>
        {user.name} - {user.address}
      </div>
    </>
  );
};

export default Footer;
