import { useState } from 'react';
import './App.css'
import { Card } from './componetns/card/card'
import { useFoodData } from './hocks/useFoodData'
import { CreateModal } from './componetns/create-modal/modal';

function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className='container'>
      <h1>Cardapio</h1>
      <div className='card-grid'>
        {data?.map(foodData => <Card price={foodData.price} title={foodData.title} image={foodData.image}/>)}
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>novo</button>
      </div>
    </div>
  )
}

export default App
