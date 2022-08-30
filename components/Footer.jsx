import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box
    textAlign={"center"}
    p="5"
    color={"gray.600"}
    borderTop="10px"
    borderColor={"gray.100"}
  >
    Copyright &copy; {new Date().getFullYear()} Chris Li
  </Box>
);

export default Footer;
