Here are some instructions:

Create and save an entry in your hosts file with the following:
127.0.0.1	visitor.nowtv.com

Run (this will start a simple http server listening on port 8000)
$ python -m SimpleHTTPServer

Open a browser and make sure you remove all the cookies for .nowtv.com and .sky.com domains.

In the browser open the page http://visitor.nowtv.com and click on the button Fetch Visitor ID.

Verify that after that you have s_id cookie with the same value on .nowtv.com and .sky.com.

Cheerios,
Nuno Monteiro
