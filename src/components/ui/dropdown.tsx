import * as Dropdown from
"@radix-ui/react-dropdown-menu";

export default function AppDropdown(){

return(

<Dropdown.Root>

<Dropdown.Trigger>

Open

</Dropdown.Trigger>

<Dropdown.Content className="
bg-background
border
rounded-xl
p-2
">

<Dropdown.Item>

Profile

</Dropdown.Item>

<Dropdown.Item>

Settings

</Dropdown.Item>

<Dropdown.Item>

Logout

</Dropdown.Item>

</Dropdown.Content>

</Dropdown.Root>

);

}