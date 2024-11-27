import { FiTrash2 } from "react-icons/fi";

interface DeleteButtonProps {
  id: number;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  return (
    <div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <FiTrash2 />
        </button>
        {id}
    </div>
  )
}
