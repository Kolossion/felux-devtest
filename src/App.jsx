import './App.css';
import { useEffect, useState } from 'react';
import QuoteAnalyzer from './components/QuoteAnalyzer';
import data from './lib/data.json';

function App() {
  const [quoteData, setQuoteData] = useState(null)

  useEffect(() => {
    // NOTE: Simulate data retrieval from backend
    setTimeout(
      () => { setQuoteData(data);},
      1000
    )
  }, [])

  return (
    <div className="App">
      <h1>Quote Analyzer</h1>

      { quoteData != null ?
          <QuoteAnalyzer data={quoteData} /> : <p>Loading...</p>
      }
    </div>
  );
}

export default App;
