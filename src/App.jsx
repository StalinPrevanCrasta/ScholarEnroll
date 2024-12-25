import Register from './Register'
import ViewAll from './ViewAll'
import './App.css'
import { useState } from 'react'

function App() {
  const [showViewAll, setShowViewAll] = useState(false);
  const handleViewAllClick = () => {
    setShowViewAll(!showViewAll);
  };
  return (
    <div>
      <h2> Enter USN and Name</h2>
      <Register />
      <button onClick={handleViewAllClick}>
        {showViewAll ? 'Hide All' : 'View All'}
      </button>
      {showViewAll && <ViewAll />}
    </div>
  )
}

export default App;
