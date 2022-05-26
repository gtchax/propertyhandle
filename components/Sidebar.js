import React from "react";
import Image from "next/Image";
import { Box, List, Divider } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import { MdOutlineDashboard, MdEuroSymbol } from "react-icons/md";
import { FiCreditCard, FiSettings } from "react-icons/fi";
import { BsHouseDoor } from "react-icons/bs";
import { FaAcquisitionsIncorporated } from "react-icons/fa";

const navMenu = [
  {
    name: "Dashboard",
    icon: MdOutlineDashboard,
    route: "/dashboard",
  },
  {
    name: "Wallet",
    icon: FiCreditCard,
    route: "/dashboard/wallet",
  },
  {
    name: "Invest",
    icon: MdEuroSymbol,
    route: "/dashboard/invest",
  },
  {
    name: "Voting",
    icon: FaAcquisitionsIncorporated,
    route: "/dashboard/voting",
  },
  {
    name: "Security",
    icon: FiSettings,
    route: "/dashboard/security",
  },
  {
    name: "Properties",
    icon: BsHouseDoor,
    route: "/dashboard/properties",
  },
];
const Sidebar = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      bg="#fff"
      shadow="md"
      boxShadow="md"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="170px" marginBottom="5rem" paddingX="20px">
          <Image src="/logo.png" height={150} width={170} alt="logo" />
        </Box>
        <Box marginBottom="20px" width="100%">
          <List spacing={7} width="100%">
            {navMenu.map((menu) => (
              <MenuItem menu={menu} key={menu.name} />
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
