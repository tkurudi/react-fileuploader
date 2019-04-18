import React, { Component } from 'react';
import FileUpload from './components/FileUpload';
import './App.css';


  const App = () => (
    
      <div className="container mt-4">
      <h4 className=" display-4 text-center mb-4">
          <i className="fab fa-react">Rect File Upload</i>
      </h4>
      <FileUpload/>
        
      </div>
  )
export default App;
