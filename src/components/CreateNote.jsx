import { tags } from "../Utils/tags"

const CreateNote = () => {
    function filter(tags) {
        const filteredTags = tags.filter((tag) => { return tag !== 'all tags' })

        return filteredTags.map((tag, index) => {
            return <div key={index} className="py-2 px-3 border border-gray-400 rounded-lg font-semibold cursor-pointer hover:bg-gray-200">{tag}</div>
        })

    }

    return (
        <section className="flex flex-col gap-6 border border-gray-300 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold">Create New Note</h2>
            <input type="text" placeholder="Note title..." className="w-full input rounded-md" />
            <textarea className="w-full textarea rounded-md" rows={7} placeholder="Write your note here..."></textarea>

            <p className="font-semibold">Tags</p>
            <section className="flex gap-3.5 flex-wrap">
                {filter(tags)}
            </section>

            <section className="flex gap-4 w-full justify-end">
                <button className="btn btn-ghost rounded-lg">Cancel</button>
                <button className="btn btn-neutral rounded-lg">Create</button>
            </section>
        </section>
    )
}

export default CreateNote
