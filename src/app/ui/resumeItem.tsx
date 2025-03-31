import { ResumeItemData } from "../data/resumeItemData"

interface IResumeItem {
  item : ResumeItemData
}

export const ResumeItem : React.FC<IResumeItem> = ({item}) => {
  return (
    <li className="mb-2">
      {item.companyName}
    </li>
  )
}
