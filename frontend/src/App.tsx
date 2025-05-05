import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('loading…');
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'health/')
      .then(r => r.json())
      .then(j => setStatus(j.status))
      .catch(() => setStatus('error'));
  }, []);
  return <div className="p-4 text-center">API status: {status}</div>;
}

export default App;
