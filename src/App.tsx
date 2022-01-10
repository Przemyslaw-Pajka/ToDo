import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer';
import { TodosProvider } from './store/Todos';

function App() {
  return (
    <TodosProvider>
      <TodoContainer/>
    </TodosProvider>
  );
}

export default App;
