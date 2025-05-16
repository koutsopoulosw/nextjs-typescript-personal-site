type LinkData = {
  label: string;
  href: string;
};

const exampleLinks : LinkData[] = [{
  label: "List App Example",
  href: "/examples/list"
}];

const navLinks : LinkData[] = [{
  label: "Summary",
  href: "#summary"
}, {
  label: "Experience",
  href: "#experience"
}, {
  label: "Portfolio",
  href: "#portfolio"
}];


export type { LinkData };
export { exampleLinks, navLinks };