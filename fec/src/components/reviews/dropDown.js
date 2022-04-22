import { Dropdown } from 'bootstrap-4-react';

const DropDown = () => {
    return (
        <Dropdown>
          <Dropdown.Button secondary id="dropdownMenuButton">Dropdown button</Dropdown.Button>
          <Dropdown.Menu aria-labelledby="dropdownMenuButton">
            <Dropdown.Item href="#" active>Action</Dropdown.Item>
            <Dropdown.Item disabled>Another action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )

}
 export default DropDown;