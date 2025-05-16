import Link from 'next/link'
import { LinkData, exampleLinks } from "../data/links";
import LinkButton from '../ui/linkButton';

export default async function Layout() {
 
  const exampleList = exampleLinks.map(item => 
    <LinkButton item={item}/>
  );

  return (
    <ul>
      {exampleList}
    </ul>
  )
}