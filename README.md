# LyricsFinder

We created a simple webpage that prompts the user to type in an artist’s name and the title of a song, and then searches for song lyrics. The page takes input from two text boxes and then uses AJAX to connect to an API and uses the JSON object that returns and displays 

We had some difficulty coding the JavaScript, namely implementing the AJAX call. The JSON object that returns contains a single member, with a long string value containing the lyrics. It took some time to figure out how to get lines to separate exactly.

We initially wanted to implement something that would make a call to Spotify or YouTube’s API, which would search for the lyrics and then search for the music video in YouTube, but we quickly discovered how much extra work that would take and simplified it to its current state.
