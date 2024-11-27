
import { TiPencil } from "react-icons/ti";

interface EditButtonProps {
  id: number;
}

export default function EditButton({ id }: EditButtonProps) {
  return (
    <div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        <TiPencil />
      </button>
      {id}
    </div>
  );
}
