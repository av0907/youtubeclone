export const YOUTUBE_API_KEY="AIzaSyBAuXYluwGysb2nkVrRV8V_MWooXEo8IjY";

export const YOUTUBE_MOVIES_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=75&regionCode=IN&key="+YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId="

//export const YOUTUBE_COMMENTS_API_OLD = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key="+YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_API_USER_INPUT="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";