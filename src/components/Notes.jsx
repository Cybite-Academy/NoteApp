import { IoMdMore } from "react-icons/io";
import { format} from 'date-fns';
import { useState } from "react";
const Notes = ({ noteDetails }) => {
      const [createdAt] = useState(new Date());
    return (
        <div className='flex flex-col gap-8'>
            {noteDetails.length > 0 ? (
                noteDetails.map(note => (
                    <div key={note.title} className="flex flex-col gap-3 border border-black p-6 rounded-lg cursor-pointer">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold capitalize">{note.title}</h3>
                            <div className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                                <IoMdMore />
                            </div>
                        </div>
                        <p className="text-gray-600">{note.note}</p>
                        <p className="w-fit text-[10px] text-black bg-gray-200 py-1 px-2 rounded-full">{note.noteTag}</p>
                        <p className="text-sm text-gray-400">Created:  {format(createdAt, 'MMM d, yyyy, h:mm a')}</p>
                        
                    </div>
                ))
            ) : (
                <p className="text-gray-400 text-center pt-16">No notes yet. Create your first note!</p>
            )}
        </div>

    )
}

export default Notes
