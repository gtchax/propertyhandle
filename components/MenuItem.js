import NextLink from "next/link";
import { ListItem, ListIcon, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import NavLink from "./NavLink";

import { useRouter } from "next/router";
const MenuItem = ({ menu }) => {
  const router = useRouter();
  const isActive = router.pathname === menu.route;
  return (
    <ListItem fontSize="16px" key={menu.name}>
      <LinkBox>
        <NavLink
          to={menu.route}
          passHref
          activeProps={{
            bg: "#FAFBFF",
            borderLeft: "10px",
            borderColor: "purple",
            borderStyle: "solid",
            color: "purple",
          }}
          py="0.7rem"
          paddingX="20px"
          width="100%"
          display="block"
        >
          <LinkOverlay>
            {isActive ? (
              <ListIcon as={menu.icon} color="purple" marginRight="20px" />
            ) : (
              <ListIcon as={menu.icon} color="gray" marginRight="20px" />
            )}
            {menu.name}
          </LinkOverlay>
        </NavLink>
      </LinkBox>
    </ListItem>
  );
};

export default MenuItem;
