import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
const Header = () => {
    return (
        <section className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Note App</h1>
            <div className=" flex gap-4">
                <section className="flex gap-2 items-center">
                    <IoSunnyOutline className="text-xl" />
                    <input type="checkbox" defaultChecked className=" toggle toggle-neutral" />
                    <GoMoon className="text-xl" />
                </section>
                <button className="btn bg-black text-white border-black rounded-lg">
                    <IoIosAdd className="text-2xl" />
                    New Note
                </button>
            </div>
        </section>
    )
}

export default Header
