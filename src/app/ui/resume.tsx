import { ResumeItem } from "./resumeItem"
import { ResumeItemData, resumeItemList } from "../data/resumeItemData"

export default function Resume() {
  
  const resumeList = resumeItemList.map(item => 
    <ResumeItem item={item} key={item.startDate}/>
  );
  
  return (
    <ol className="list-none text-sm text-left">
      {resumeList}
    </ol>
  )
}