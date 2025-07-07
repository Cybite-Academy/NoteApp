import { useState } from "react";
import CreateByTags from "./CreateByTags";


const CreateNote = ({ openCreate, noteDetails, setNoteDetails }) => {

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");
    const [noteTag, setNoteTag] = useState([]);

    function cancelNewNote() {
        openCreate(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !note) {
            alert("Please fill in all fields.");
            return;
        }
        setNoteDetails([...noteDetails, { title, note, noteTag }]);
        cancelNewNote();
    };

    return (
        <form
            className="flex flex-col gap-6 border-2 border-black p-6 rounded-lg"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-semibold">Create New Note</h2>
            <input
                type="text"
                placeholder="Note title..."
                className="w-full input rounded-md border-black"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <textarea
                className="w-full textarea rounded-md border-black"
                rows={7}
                placeholder="Write your note here..."
                onChange={(e) => setNote(e.target.value)}
            ></textarea>

            <p className="font-semibold">Tags</p>
            <section className="flex gap-3.5 flex-wrap">
                <CreateByTags setNoteTag={setNoteTag} />
            </section>

            <section className="flex gap-4 w-full justify-end">
                <button className="btn btn-ghost rounded-lg" onClick={cancelNewNote}>
                    Cancel
                </button>
                <button className="btn btn-neutral rounded-lg">Create</button>
            </section>
        </form>
    );
};

export default CreateNote;
