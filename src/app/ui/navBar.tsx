import { LinkData, navLinks } from "../data/links";
import LinkButton from "./linkButton";

export default function NavBar() {
  
  const navBarItems = navLinks.map(item => 
    <LinkButton key={item.label} item={item}/>
  );
  
  return (
    <div className="flex flex-col mt-4 mr-4 items-end">
      <ul className="list-none text-sm text-left">
        {navBarItems}
      </ul>
    </div>
  )
}