import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [expenses, setExpenses] = useState([]);

  // Step A: Fetch data from your Java Backend
  const fetchExpenses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/expenses");
      setExpenses(response.data);
    } catch (error) {
      console.error("Error connecting to Java:", error);
    }
  };

  // Step B: Run the fetch function when the page loads
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1> Welcome!</h1>
      <p>Status: Connected to <b>Java Spring Boot + PostgreSQL</b></p>

      <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '10px' }}>Description</th>
            <th style={{ padding: '10px' }}>Amount</th>
            <th style={{ padding: '10px' }}>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td style={{ padding: '10px' }}>{expense.description}</td>
              <td style={{ padding: '10px' }}>${expense.amount}</td>
              <td style={{ padding: '10px' }}>{expense.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;