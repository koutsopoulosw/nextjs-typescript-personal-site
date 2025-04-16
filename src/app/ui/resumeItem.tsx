import { ResumeItemData } from "../data/resumeItemData"

interface IResumeItem {
  item : ResumeItemData
}

export const ResumeItem : React.FC<IResumeItem> = ({item}) => {
  return (
    <li className="mb-10">
      <h2 className="text-l md:text-xl lg:text-xl font-bold">{item.jobTitle}</h2>
      <div className="flex flex-row justify-between mb-4">
        <h3 className="text-m md:text-l lg:text-l font-semibold">{item.companyName}</h3>
        <h3 className="text-m md:text-l lg:text-l font-semibold">{`${item.startDate} - ${item.endDate}`}</h3>
      </div>
      <p className="text-s md:text-s lg:text-s">{item.description}</p>
    </li>
  )
}
