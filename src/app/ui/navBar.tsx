const navBarItemData = [{
  label: "Summary",
  href: "#summary"
}, {
  label: "Experience",
  href: "#experience"
}, {
  label: "Portfolio",
  href: "#portfolio"
}];

export default function NavBar() {
  
  const navBarItems = navBarItemData.map(item => 
  <li key={item.label}>
    <a href={item.href} className="flex flex-row justify-center w-xs border-2 text-slate-500 border-slate-400 md:text-2xl lg:text-l mt-4 mb-4 transition duration-200 hover:border-slate-700 hover:text-slate-900 hover:bg-stone-200">{item.label}</a>
  </li>
  );
  
  return (
    <div className="flex flex-col mt-4 mr-4 items-end">
      <ul className="list-none text-sm text-left">
        {navBarItems}
      </ul>
    </div>
  )
}