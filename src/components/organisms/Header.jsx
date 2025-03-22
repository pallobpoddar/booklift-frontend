import { useSelector } from "react-redux";
import { Link } from "react-router";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import NavigationList from "../molecules/NavigationList";
import PrimaryInput from "../atoms/Input";
// import IconButton from "../atoms/Button";
import Button from "../atoms/Button.jsx";
import {
  StyledHeader,
  StyledList,
  StyledInput,
  StyledIcon,
} from "./Header.styles.jsx";
import styled from "styled-components";

const StyledButton = styled.button`
	padding: 0.5rem 1rem;
	background-color: #3e5962;
	color: white;
	font-weight: bold;
`

const Header = () => {
  const data = useSelector((state) => state.user.userData);
  return (
    <StyledHeader>
      <NavigationList StyledList={StyledList} />
      <PrimaryInput
        type="search"
        StyledInput={StyledInput}
        placeholder="Search Khonika"
      />
      <Link to="/user/cart" className="link">
        {/* <IconButton StyledIcon={StyledIcon} icon={faCartShopping} size="2xl" /> */}
      </Link>
      <Link to="/user/profile" className="link">
        {/* <IconButton StyledIcon={StyledIcon} icon={faUser} size="2xl" /> */}
      </Link>
      <Link to="/signin" className="link">
        {data === null || data === undefined ? (
          <Button StyledButton={StyledButton} text="Sign in" />
        ) : (
          <Button StyledButton={StyledButton} text="Sign out" />
        )}
      </Link>
    </StyledHeader>
  );
};

export default Header;
