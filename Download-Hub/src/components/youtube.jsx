import React, { useState } from 'react';
import '../assests/Stylesheets/youtube.css'
import YoutubeMediaDownloader from '../config/YoutubeAPI'; // THE API FILE

function Youtube() {

    const [url, setURL] = useState(''); // Where we will be string the videos Link

    const [data, setData] = useState(''); // Where we will be storing the video from the API

    const [error, setError] = useState(''); // Where we will store any error (If we get any)

    const [loading, setLoading] = useState(false); // To show the loader when the user clicks on the search button

    // Function where we will retrieve the URL link of the video
    const HandleSubmit = async () => {
        const trimmedUrl = url.trim();

        if (trimmedUrl) {
            try {
                setLoading(true); // show loader when the user clicks on the search button

                setData(''); // to change the video If the user clicks on the button again (with another video)

                const response = await YoutubeMediaDownloader(trimmedUrl); // we are sending the url to the API to check If there is a video from this URL

                setData(response); // where we will store the video retrieved from the API

                setError(''); // If there are any past errors shown we will remove them when we find a video

                // console.log(response); 
            } catch (error) {
                setData(''); // to remove the previous video If the new link has an error

                // console.log(error);

                setError(<>
                    Oops, There was a problem. Possible reasons could be: <br />
                    1) The provided link is broken or incorrect. <br />
                    2) The video is private and cannot be retrieved.
                </>); // setting an error with multiple lines
            } finally {
                setLoading(false); // hide the loader
            }
        } else {
            // Handling the case when the URL is empty
            setData('');
            setError('Please enter a valid video link.');
        }
    }

    return (
        <>
            <h1 className='youtube-heading'>Youtube</h1>

            <div className='yt-input-container'>
                <input type="text" className='yt-input' placeholder="Paste video link here..." value={url} onChange={(e) => setURL(e.target.value)} />
            </div>

            <div className='btn-container'>
                <button className='yt-buttons search-btn' onClick={HandleSubmit}>Search</button>
                {data &&
                    <a href={data} download>
                        <button className='yt-buttons download-btn'>Download</button>
                    </a>
                }
            </div>

            {error && <p className='yt-error'>{error}</p>}

            {loading && (
                <div className='spinner-container'>
                    <div className='spinner'></div>
                </div>
            )}

            {data &&
                <div className='video-container'>
                    <video controls className="yt-video">
                        <source src={data} type='video/mp4' />
                        Your browser does not support this video tag
                    </video>
                </div>
            }
        </>
    )
}

export default Youtube;