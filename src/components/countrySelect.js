import React, { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Checkbox, VStack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const CountrySelect = () => {
  // State to manage the selected options
  const [selectedItems, setSelectedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const fuck = () => {
    console.log(selectedItems)
}
  return (
    <Menu closeOnSelect={false} onClose={fuck()}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
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
