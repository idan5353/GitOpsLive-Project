import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [health, setHealth] = useState('loading...')
  const [orders, setOrders] = useState([])
  const [inventory, setInventory] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const [healthRes, ordersRes, inventoryRes] = await Promise.all([
          fetch(`/health`),
          fetch(`/api/orders`),
          fetch(`/api/inventory`)
        ])

        if (!healthRes.ok || !ordersRes.ok || !inventoryRes.ok) {
          throw new Error('API request failed')
        }

        const healthData = await healthRes.json()
        const ordersData = await ordersRes.json()
        const inventoryData = await inventoryRes.json()

        setHealth(healthData.status)
        setOrders(ordersData)
        setInventory(inventoryData)
      } catch {
        setError('Failed to load API data')
      }
    }

    load()
  }, [])

  return (
    <div className="container">
      <h1>aws-gitops-platform</h1>
      <p className="subtitle">Frontend connected to FastAPI backend on EKS</p>

      <div className="card">
        <h2>Backend health</h2>
        <p>Status: <strong>{health}</strong></p>
        {error && <p className="error">{error}</p>}
      </div>

      <div className="grid">
        <div className="card">
          <h2>Orders</h2>
          <ul>
            {orders.map((order) => (
              <li key={order.id}>
                #{order.id} - {order.item} - qty {order.quantity} - {order.status}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>Inventory</h2>
          <ul>
            {inventory.map((item) => (
              <li key={item.sku}>
                {item.sku} - stock {item.stock}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App