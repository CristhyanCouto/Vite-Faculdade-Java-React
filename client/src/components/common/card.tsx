
import { CardType } from '../../lib/types/card'
import DeleteButton from './delete-button'
import EditButton from './edit-button'

export default function Card(props: CardType) {
  return (
<div>
    <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className='border'>
            <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Description</th>
                <th className="px-6 py-4">Start Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Resource</th>
            </tr>
        </thead>
        <tbody>
            <tr className='border'>
                <td className="bg-white text-gray-700 text-lg px-6 py-4 text-center">{props.id}</td>
                <td className="bg-white text-gray-700 text-lg px-6 py-4 text-center">{props.title}</td>
                <td className="px-6 py-4">
                    <p className="text-gray-700 text-base">{props.description}</p>
                </td>
                <td className="bg-white text-gray-700 text-sm px-6 py-4 text-center">{props.startDate}</td>
                <td className="bg-white text-gray-700 text-sm px-6 py-4 text-center">{props.status}</td>
                <td className="bg-white text-gray-700 text-sm px-6 py-4 text-center">{props.resource}</td>
                <td> <EditButton/> </td>
                <td> <DeleteButton/> </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}
