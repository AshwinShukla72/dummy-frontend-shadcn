import { useState } from 'react'
import { Button, } from '@/components/ui/button'
import './App.css'
import { Badge } from './components/ui/badge'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col bg-background'>
        <Button onClick={() => setCount((count) => count + 1)}> UP </Button>
        <Button onClick={() => setCount((count) => count - 1)}> DOWN </Button>
      </div>
      <div>
        <Button onClick={() => setCount((count) => count + 2)}> Add 2</Button>
        <Button onClick={() => setCount((count) => count - 2)}> Subtract by 2 </Button>
      </div>
      <div>
        <Badge>{count}</Badge>
      </div>
    </>
  )
}

export default App