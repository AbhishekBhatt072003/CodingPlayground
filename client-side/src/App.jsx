import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Editor from "@monaco-editor/react";
function App() {
  const [count, setCount] = useState(0)
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function handleEditorChange(value, event) {
    console.log("here is the current model value:", value);
  }

  function showValue() {
    console.log(editorRef.current.getValue());
  }
  return (
    <div className="App">
      <button onClick={showValue}>submit</button>
      <div>
        <Editor
          height="90vh"
          width="100vw"
          defaultLanguage="javascript"
          // onChange={handleEditorChange}
          // onMount={handleEditorDidMount}
          defaultValue="// some comment"
        />
      </div>
    </div>
  )
}

export default App
