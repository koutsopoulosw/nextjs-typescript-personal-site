import { ResumeItem } from "./resumeItem"
import { ResumeItemData, resumeItemList } from "../data/resumeItemData"

export default function Resume() {
  
  const resumeList = resumeItemList.map(item => 
    <ResumeItem item={item} key={item.startDate}/>
  );
  
  return (
    <div className="mt-4">
      <h2 className="text-x1 md:text-2xl lg:text-3xl pb-2">Work Experience</h2>
      <ol className="list-none text-sm text-left">
        {resumeList}
      </ol>
    </div>
  )
}