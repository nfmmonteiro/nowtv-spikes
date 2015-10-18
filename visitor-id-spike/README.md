Results
---------

This exercise proves that: 

* with a JSONP call it's possible to make a call from .nowtv.com domain to get omniture visitor ID; 
* as a result of the JSONP call a visitor ID cookie is created on .sky.com domain (s_id); 
* it is possible to store the same visitor ID value under .nowtv.com domain;



Instructions
---------

Create and save an entry in your hosts file with the following: 
	127.0.0.1 visitor.nowtv.com

Run (this will start a simple http server listening on port 8000)
	$ python -m SimpleHTTPServer

Open a browser and make sure you remove all the cookies for .nowtv.com and .sky.com domains.

In the browser open the page http://visitor.nowtv.com and click on the button Fetch Visitor ID.

Verify that after that you have s_id cookie with the same value on .nowtv.com and .sky.com.
