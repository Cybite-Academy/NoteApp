const Notes = ({ noteDetails }) => {
    return (
        <div>
            {noteDetails.length > 0 ? (
                noteDetails.map(note => (
                    <div key={note.title} className="flex flex-col gap-2 border border-black p-4 rounded-lg">
                        <h3 className="text-xl font-semibold">{note.title}</h3>
                        <p className="text-gray-600">{note.note}</p>
                        <span className="w-fit text-[12px] text-black bg-slate-200 py-1 px-1.5 rounded-full">{note.noteTag}</span>
                    </div>
                ))
            ) : (
                <p className="text-gray-400 text-center pt-16">No notes yet. Create your first note!</p>
            )}
        </div>

    )
}

export default Notes
