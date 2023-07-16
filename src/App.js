import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
import {useState} from "react";

function App(){
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration:2500
});
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition)
   {
    return null
}

  return(
    <div className="container">
      <h2>Speech to Text 
        <span> by Sakthivel.M</span></h2>
      <br/>
    <div className="content" onClick={() =>  setTextToCopy(transcript)}>
{transcript}
    </div>
    <div className="btn-style">
      <button onClick={startListening}>Start Listening</button>
      <button onClick={setCopied}>{isCopied ? 'Copied!' : 'Copy to clipboard'}</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

    </div>
    </div>
  )
}
export default App