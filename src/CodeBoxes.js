import React from 'react';
import './css/Codeboxes.css';
 
const CodeBoxes = () => (
  <div className="container">
    <pre data-lang="HTML">
      <code
        id="html"
        className="codearea token language-html"
        contentEditable
        spellCheck="false">
      </code>
    </pre>
    <pre data-lang="CSS">
      <code
        id="css"
        className="codearea language-css"
        contentEditable
        spellCheck="false">
      </code>
    </pre>
    <pre data-lang="Javascript">
      <code
        id="js"
        className="codearea language-js"
        contentEditable
        spellCheck="false">
      </code>
    </pre>
  </div>
);

export default CodeBoxes;