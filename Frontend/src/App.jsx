import { useState } from 'react'
import './App.css'
import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/themes/prism-tomorrow.css'
import Editor from 'react-simple-code-editor'
import { getCodeReview } from './services/api'

function App() {
  const defaultCode = `// Example code to review
function calculateTotal(items) {
    let total = 0;
    for(let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}

const cart = [
    { id: 1, price: 10 },
    { id: 2, price: 20 }
];

console.log(calculateTotal(cart)); // Output: 30`;

  const [code, setCode] = useState(defaultCode);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleValueChange = (newCode) => {
    setCode(newCode);
  };

  const handleReview = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Sending code for review:', code);
      const response = await getCodeReview(code);
      console.log('Received response:', response);
      setReview(response);
    } catch (err) {
      console.error('Review error:', err);
      const errorMessage = err.response?.data 
        ? `Server error: ${err.response.data}` 
        : err.message || 'An error occurred while reviewing the code';
      setError(`${errorMessage} (Status: ${err.response?.status || 'Unknown'})`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1 className="title">Code Reviewer — UI Test</h1>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={handleValueChange}
            highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
            padding={15}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 14,
              backgroundColor: '#2d2d2d',
              borderRadius: '0.5rem',
              minHeight: '300px',
              color: '#fff'
            }}
          />
        </div>
        <button 
          className="review" 
          onClick={handleReview}
          disabled={loading}
        >
          {loading ? 'Reviewing...' : 'Review Code'}
        </button>
      </div>
      <div className="right">
        {error && <div className="error">{error}</div>}
        <pre className="review-result">{review}</pre>
      </div>
    </main>
  );
}

export default App
