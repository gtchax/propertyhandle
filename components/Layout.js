import { Box } from "@chakra-ui/layout";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px" bg="#F9F9F9" minH="100vh">
        <Navbar />
        <Box p="2rem">{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
