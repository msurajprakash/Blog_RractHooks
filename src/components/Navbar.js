import { NavLink } from "react-router-dom";
import styled from "styled-components";

//to style the given tags from library like NavLink
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #9e9e9e;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <div className="">
      <ul id="nav">
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/create-post'>Create Post</StyledLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;