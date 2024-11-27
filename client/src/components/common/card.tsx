import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteButton from "./delete-button";
import EditButton from "./edit-button";
import { CardType } from "../../lib/types/card";

interface CardProps {
  data: CardType[];
}

export default function Card({ data }: CardProps) {
  interface ActionCellParams {
    id: number;
    title: string;
    description: string;
    startDate: string;
    status: string;
    resource: string;
  }

  const columns: GridColDef<ActionCellParams>[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "description", headerName: "Description", width: 150 },
    { field: "startDate", headerName: "Start Date", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "resource", headerName: "Resource", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => (
        <div>
          <EditButton id={params.row.id} />
        </div>
      ),
    },
    {
        field: "delete",
        headerName: "Delete",
        width: 150,
        renderCell: (params) => (
          <div>
            <DeleteButton id={params.row.id} />
          </div>
        ),
      },
  ];

  return (
    <div>
      <div className="w-full">
        <DataGrid
          rows={data} // Usa os dados recebidos via props
          columns={columns}
          pagination
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
}
