import { useState } from "react"
import { tags } from "../Utils/tags"
import { v4 as uuidv4 } from 'uuid';

const CreateNote = ({ openCreate, noteDetails, setNoteDetails }) => {
    const id = uuidv4();

    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [tag, setTag] = useState('');

    const [activeTag, setActiveTag] = useState(false);
    function filter(tags) {
        const filteredTags = tags.filter((tag) => { return tag !== 'all tags' })

        return filteredTags.map((tag, index) => {
            return <div key={index} className={`py-2 px-3 border border-gray-400 rounded-lg font-semibold cursor-pointer hover:bg-gray-200`} onClick={() => { setTag(tag); setActiveTag(true) }}>{tag}</div>
        })

    }

    function cancelNewNote() {
        openCreate(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setNoteDetails([...noteDetails, { id, title, note, tag }]);
        cancelNewNote();
    }

    return (
        <form className="flex flex-col gap-6 border border-gray-300 p-6 rounded-lg" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold">Create New Note</h2>
            <input type="text" placeholder="Note title..." className="w-full input rounded-md" onChange={(e) => { setTitle(e.target.value) }} />
            <textarea className="w-full textarea rounded-md" rows={7} placeholder="Write your note here..." onChange={(e) => setNote(e.target.value)}></textarea>

            <p className="font-semibold">Tags</p>
            <section className="flex gap-3.5 flex-wrap">
                {filter(tags)}
            </section>

            <section className="flex gap-4 w-full justify-end">
                <button className="btn btn-ghost rounded-lg" onClick={cancelNewNote}>Cancel</button>
                <button className="btn btn-neutral rounded-lg">Create</button>
            </section>
        </form>
    )
}

export default CreateNote
