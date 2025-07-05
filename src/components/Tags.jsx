import { TbTags } from "react-icons/tb";
import {tags} from '../Utils/tags'
const Tags = () => {
  
    return (
        <div className="dropdown dropdown-start ">
            <section tabIndex={0} role="button" className="btn m-1">
                <TbTags className="text-xl" />
                <p>All Tags</p>
            </section>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm flex">
                {tags.map((tag, index) => {
                    return <li key={index} className="cursor-pointer hover:bg-gray-200 p-2 rounded-md">{tag}</li>
                })}
            </ul>
        </div>
    )
}

export default Tags
