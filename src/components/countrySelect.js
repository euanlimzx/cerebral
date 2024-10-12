import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const CountrySelect = ({ country, setCountry }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {country}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setCountry("Japan")}>🇯🇵 Japan</MenuItem>
        <MenuItem onClick={() => setCountry("America")}>🇺🇸 America</MenuItem>
        <MenuItem onClick={() => setCountry("Vietnam")}>🇻🇳 Vietnam</MenuItem>
      </MenuList>
    </Menu>
  );
};
