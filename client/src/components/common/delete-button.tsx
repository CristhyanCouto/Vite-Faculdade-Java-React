import { FiTrash2 } from "react-icons/fi";


export default function DeleteButton() {
  return (
    <div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <FiTrash2 />
        </button>
    </div>
  )
}
