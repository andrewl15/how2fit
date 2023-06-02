import React from 'react';
import Header from './components/Header';
import LoadingPage from './pages/Loading';
import { useLoading } from './HelperFunc/Loading_Check';


function App() {
  return (
    <div>
      {useLoading() ? (
        <LoadingPage />
      ) : (
        <div>
          <div className = "App">
            <Header />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;