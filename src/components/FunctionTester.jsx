import React, { useState } from 'react';

const FunctionTester = () => {
  const [testResult, setTestResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testFunction = async (functionName) => {
    setLoading(true);
    setTestResult('');
    
    try {
      const response = await fetch(`/.netlify/functions/${functionName}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test: true })
      });
      
      const data = await response.json();
      setTestResult(`Status: ${response.status}\nResponse: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setTestResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg text-white mt-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">Function Tester</h2>
      <div className="space-y-4">
        <button
          onClick={() => testFunction('test-function')}
          disabled={loading}
          className="w-full py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors disabled:opacity-60"
        >
          {loading ? 'Testing...' : 'Test Basic Function'}
        </button>
        
        <button
          onClick={() => testFunction('submit-courses-registration')}
          disabled={loading}
          className="w-full py-2 px-4 rounded bg-green-600 hover:bg-green-700 text-white font-bold transition-colors disabled:opacity-60"
        >
          {loading ? 'Testing...' : 'Test Courses Registration'}
        </button>
        
        <button
          onClick={() => testFunction('submit-festival-registration')}
          disabled={loading}
          className="w-full py-2 px-4 rounded bg-purple-600 hover:bg-purple-700 text-white font-bold transition-colors disabled:opacity-60"
        >
          {loading ? 'Testing...' : 'Test Festival Registration'}
        </button>
      </div>
      
      {testResult && (
        <div className="mt-4 p-4 bg-gray-700 rounded">
          <h3 className="font-bold mb-2">Test Result:</h3>
          <pre className="text-sm whitespace-pre-wrap">{testResult}</pre>
        </div>
      )}
    </div>
  );
};

export default FunctionTester; 