import axios from "axios";

async function InstagramMediaDownloader(url) {
    const options = {
        method: 'GET',
        url: 'https://fb-video-reels.p.rapidapi.com/smvd/get/all',
        params: {
            url: url, // Recieving the URL and checking If there is a video on social media with this link
            filename: 'DownloadHub-Video'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY, // your API key you'll get after you sign up
            'X-RapidAPI-Host': process.env.REACT_APP_API_HOST // your API host you'll get after you sign up
        }
    };

    try {
        // If we find a video we send it back to the instagram.jsx file to render the video
        const response = await axios.request(options);
        // console.log(response.data);
        let videoURL = response.data.links[0].link;
        return videoURL;
    } catch (error) {
        // If we dont find a video we throw the error

        // console.error(error);
        throw error;
    }
}


export default InstagramMediaDownloader;