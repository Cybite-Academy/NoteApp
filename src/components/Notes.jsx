

const Notes = ({ noteDetails }) => {
    return (
        <div>
            {noteDetails.length > 0 ? (
                noteDetails.map(note => (
                    <div key={note.id} className="border border-gray-300 p-4 rounded-lg mb-4">
                        <h3 className="text-xl font-semibold">{note.title}</h3>
                        <p className="text-gray-600">{note.note}</p>
                        <span className="text-sm text-gray-500">Tag: {note.tag}</span>
                    </div>
                ))
            ) : (
                <p className="text-gray-400 text-center pt-16">No notes yet. Create your first note!</p>
            )}
        </div>

    )
}

export default Notes
