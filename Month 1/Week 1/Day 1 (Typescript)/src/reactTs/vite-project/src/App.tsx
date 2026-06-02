import './App.css'
import { Card } from './component/Card.tsx';
import { ChaiCard } from './component/ChaiCard.tsx'
import { ChaiList } from './component/ChaiList.tsx';
import { Counter } from './component/Counter.tsx'
import { OrderForm } from './component/OrderForm.tsx';
import type { Chai } from './types.ts'

const menu: Chai[] = [
  {
    id: 1,
    name: "masala",
    price: 30,
  },
  {
    id: 2,
    name: "ginger",
    price: 20,
  },
  {
    id: 3,
    name: "adruk",
    price: 40,
  },
];

function App() {
  return (
    <>
      <div>
        <h1>Chai List</h1>
      </div>
      <div>
        <ChaiList items={menu}/>
      </div>
      <div>
        <OrderForm onSubmit={(order) =>{
          console.log("Placed order", order.name, order.cups)
        }}/>
      </div>
      <div>
        <Card
        title="Chai Aur TypeScript"
        footer={<button>Order Now</button>}
        />
      </div>

    </>
  )
}

export default App
