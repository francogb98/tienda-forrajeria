import { BarChart } from '@tremor/react';

const chartdata = [
  {
    name: 'Ducho',
    'Lista de alimentos perros': 200,
  },
  {
    name: 'Pedigree',
    'Lista de alimentos perros': 1445,
  },
  {
    name: 'Rey Kan',
    'Lista de alimentos perros': 743,
  },
  {
    name: 'Gran Danes',
    'Lista de alimentos perros': 281,
  },
  {
    name: 'Dog Chou',
    'Lista de alimentos perros': 251,
  },
  {
    name: 'Raza',
    'Lista de alimentos perros': 232,
  },
];

const dataFormatter = (number) =>
  Intl.NumberFormat('us').format(number).toString();

export const BarChartHero = () => (
    <>
    <h1>Estoy en el componenete de barchart</h1>
    <BarChart
        data={chartdata}
        categories={['Lista de alimentos perros']}
        index="name"
        valueFormatter={dataFormatter}
        colors={['yellow']}
        onValueChange={(v) => console.log(v)}
        yAxisWidth={48}
        showAnimation={true}
        
        />
    </>
);