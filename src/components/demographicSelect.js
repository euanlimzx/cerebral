import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { Button, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export function DemographicSelect() {
  return (
    <Box>
      <Menu direction="ltr">
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Categories
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
