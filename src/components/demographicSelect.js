import { Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";

export function DemographicSelect() {
  return (
    <Menu closeOnSelect={false} onClose={fuck()}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="dark">
        Select Options
      </MenuButton>
      <MenuList>
        <VStack align="stretch" spacing={2} padding="4">
          <MenuItem>
            <Checkbox
              name="option1"
              isChecked={selectedItems.option1 || false}
              onChange={handleCheckboxChange}
            >
              Option 1
            </Checkbox>
          </MenuItem>
          <MenuItem>
            <Checkbox
              name="option2"
              isChecked={selectedItems.option2 || false}
              onChange={handleCheckboxChange}
            >
              Option 2
            </Checkbox>
          </MenuItem>
          <MenuItem>
            <Checkbox
              name="option3"
              isChecked={selectedItems.option3 || false}
              onChange={handleCheckboxChange}
            >
              Option 3
            </Checkbox>
          </MenuItem>
        </VStack>
      </MenuList>
    </Menu>
  );
};

