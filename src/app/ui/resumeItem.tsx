import { ResumeItemData } from "../data/resumeItemData"

interface IResumeItem {
  item : ResumeItemData
}

export const ResumeItem : React.FC<IResumeItem> = ({item}) => {
  return (
    <li className="mb-4">
      <h2 className="text-l md:text-xl lg:text-2xl">{item.jobTitle}</h2>
      <br />
      <div className="flex flex-row justify-between">
        <h3 className="text-m md:text-l lg:text-xl">{item.companyName}</h3>
        <h3 className="text-m md:text-l lg:text-xl">{`${item.startDate} - ${item.endDate}`}</h3>
      </div>
      <p className="text-s md:text-m lg:text-l">{item.description}</p>
    </li>
  )
}
