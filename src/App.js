import './App.css'
import {useState} from 'react'

function App() {
  const [link, setLink] = useState("")
  const [currentLink, setCurrentLink] = useState("")

  function handleChangeText(e) {
    setLink(e.target.value);
  }
  function handleSubmit() {
    setCurrentLink(link);
  }

  return (
    <div className="container">
      <h1 className="mt-4 text-center mb-4">Mp3 Mp4 Downloader</h1>
      <div class="mb-3">
        <label for="basic-url" class="form-label fw-bold">
          URL
        </label>
        <div class="input-group">
          <span class="input-group-text" id="basic-addon3">
            https://
          </span>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            placeholder="silahkan masukkan link url disini"
            onChange={handleChangeText}
          />
        </div>
        <div class="form-text"></div>
        <button type="button" class="btn btn-danger" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <iframe
        id="widgetv2Api"
        src={`https://convert2mp3s.com/api/widgetv2?url=${currentLink}`}
        width="100%"
        height="100%"
        allowtransparency="true"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}

export default App;
