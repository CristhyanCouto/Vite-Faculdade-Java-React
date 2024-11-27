import Menu from "./menu";

export default function Header() {
  return (
    <div className="h-16 bg-blue-500 shadow-xl flex justify-between">
        <h1 className="text-white text-4xl flex items-center h-full ml-8">Gerenciamento de Projetos</h1>
        <Menu />
    </div>
  )
}
