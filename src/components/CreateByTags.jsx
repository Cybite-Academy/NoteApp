import { useEffect, useState } from "react";
import { tags } from "../Utils/tags";
const CreateByTags = ({setNoteTag}) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedTags, setSelectedTags] = useState(new Set());

    useEffect(() => {
    setNoteTag([...selectedTags]);
  }, [selectedTags]);

  const handleTagClick = (tag) => {
    const newSelectedTags = new Set(selectedTags);

    if (newSelectedTags.has(tag)) newSelectedTags.delete(tag);
    else newSelectedTags.add(tag);

    setSelectedTags(newSelectedTags);
  }

  const filteredTags = tags.filter((tag) => {
    return tag !== "all tags";
  });

  return filteredTags.map((tag, index) => {
    return (
      <div
        key={index}
        className={`py-1 px-2 border border-gray-400 rounded-lg font-semibold cursor-pointer hover:bg-gray-200 ${selectedTags.has(tag) ? 'bg-black text-white border-transparent hover:bg-gray-700 ' : ''} `}
        onClick={() => { handleTagClick(tag); setIsActive(!isActive); }}
      >
        {tag}
      </div>
    );
  });
}

export default CreateByTags
