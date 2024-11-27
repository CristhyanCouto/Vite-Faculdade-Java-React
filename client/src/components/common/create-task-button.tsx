import { Button } from "@mui/material";

export default function CreateTaskButton() {
  return (
    <div>
        <Button variant="contained" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Task
        </Button>
    </div>
  )
}
