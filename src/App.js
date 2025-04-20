import React, { useState } from 'react';
import { replacementsDB } from './replacementsDB';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isShortName, setIsShortName] = useState(true);

  const handleReplace = () => {
    const { from, to } = replacementsDB[selectedIndex];
    const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const newText = inputText.replace(regex, to);
    setResult(newText);
  };

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(result);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = result;
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  const toggleHeader = () => {
    setIsShortName(!isShortName);
  };

  return (
    <div className="App nunito-sans-base">
      <header className="App-header">
        <h1 onClick={toggleHeader} style={{ cursor: 'pointer' }}>
          {isShortName ? 'NADS' : 'NoAIDetectionSoftware'}
        </h1>
        <div className="input-container">
          <div className="layout-grid">
            <div className="input-section">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your text here"
              />
            </div>
            <div className="control-section">
              <div className="result">
                <div className="result-header">
                  <h3>Result:</h3>
                  <button className="copy-btn" onClick={handleCopy} title="Copy to clipboard">📋</button>
                </div>
                <p>{result}</p>
              </div>
            </div>
          </div>
          <div className="bottom-controls">
            <div className="replacement-selector">
              <label htmlFor="replacement-select">Select replacement:</label>
              <select 
                id="replacement-select"
                value={selectedIndex}
                onChange={(e) => setSelectedIndex(Number(e.target.value))}
              >
                {replacementsDB.map((replacement, index) => (
                  <option key={index} value={index}>
                    {replacement.from} → {replacement.to}
                  </option>
                ))}
              </select>
            </div>
            <button className="replace-btn" onClick={handleReplace}>
              Replace
            </button>
          </div>
        </div>
      </header>
      <footer className="App-footer">
        Created with ❤️ for lazy people by a lazy person
        <a 
          href="https://github.com/NoHidSe/NADS"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: '10px', color: '#fff' }}
        >
          <i className="fab fa-github"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
