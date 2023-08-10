import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: apiUrl,
});

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [domain, setDomain] = useState('');

  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {}, []);

  // generate mini url
  const generateMiniUrl = (event) => {
    event.preventDefault();

    try {
      if (!longUrl || longUrl.trim().length === 0) {
        setError('The URL field is empty!');
        setIsError(true);
      } else {
        const body = {
          url: longUrl,
          domain: `${apiUrl}/`,
        };

        api.post('/api/url/short', body, {}).then((res) => {
          if (res.data.success === true) {
            setShortUrl(res.data.message.shortUrlHash);
            setDomain(res.data.message.shortUrlDomain);
          } else {
            console.log(res.data.error);
            setError(res.data.error);
            setIsError(true);
          }
        });

        setError('');
        setIsError(false);
      }
    } catch (error) {}
  };

  const handleUrlChange = (event) => {
    setLongUrl(event.target.value);

    if (longUrl) {
      setIsError(false);
    } else {
      setShortUrl('');
      setDomain('');
    }
  };

  return (
    <div>
      <div className="wrapper">
        {/* form to enter and generate short url */}
        <form onSubmit={generateMiniUrl}>
          <h1>MINI URL</h1>
          <h3>Shrink. Share. Go!</h3>
          <div className="input-box">
            <input
              value={longUrl}
              onChange={handleUrlChange}
              type="text"
              placeholder="Enter your long link here"
            />
          </div>

          {/* error box */}
          <>
            {isError ? (
              <div className="error-box">
                <text>{error}</text>
              </div>
            ) : (
              <></>
            )}
          </>

          {/* response box */}
          <>
            {shortUrl ? (
              <div className="response-box">
                {domain}
                {shortUrl}
              </div>
            ) : (
              <></>
            )}
          </>
          <div>
            <button className="btn">Create mini URL</button>
          </div>
        </form>
      </div>

      <div className="footer">
        <p>&copy; 2023 Jith. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
