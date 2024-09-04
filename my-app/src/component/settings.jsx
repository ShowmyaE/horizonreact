import React from 'react';
import './settings.css'
function Settings({ language, setLanguage }) {
  // Handler for changing language
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="settings">
      <label htmlFor="language-select" className="settings-label">Select Language:</label>
      <select
        id="language-select"
        value={language}
        onChange={handleLanguageChange}
        className="settings-select"
      >
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Russian">Russian</option>
        <option value="Spanish">Spanish</option>
        <option value="Chinese">Chinese</option>
      </select>
    </div>
  );
}

export default Settings;