import Card from "../../components/common/card";
import CreateTaskButton from "../../components/common/create-task-button";
import Page from "../../components/common/page";
import { CardType } from "../../lib/types/card";

export default function Home() {
  const cards: CardType[] = [
    {
      id: 1,
      title: "Teste 1",
      description: "Descrição 1",
      startDate: "2021-09-01",
      status: "Em andamento",
      resource: "Recurso 1",
    },
    {
      id: 2,
      title: "Teste 2",
      description: "Descrição 2",
      startDate: "2021-09-02",
      status: "Em andamento",
      resource: "Recurso 2",
    },
    {
      id: 3,
      title: "Teste 3",
      description: "Descrição 3",
      startDate: "2021-09-03",
      status: "Em andamento",
      resource: "Recurso 3",
    },
  ];
  return (
    <Page>
      <div>
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold text-center mb-4">Cards</h1>
          <Card data={cards} />
        </div>
        <div className=" px-10 py-4">
          <CreateTaskButton />
        </div>
      </div>
    </Page>
  );
}
