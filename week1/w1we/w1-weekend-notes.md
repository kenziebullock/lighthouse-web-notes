## HTTP in Depth

HTTP - hypertext(text that contains links to other texts) transfer protocol 
 URL - Uniform Resource Locator
    * the address of a given unique resource on the web.
    * come in the form of an HTML document, CSS document, image, etc..

### Anatomy of a URL

http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument

http - protocol the browser must use. It is a method for transferring data around a computer network. Usually for websites it is HTTP or HTTPS (secured)

www.example.com - the domain name. Indicates the web server being requested. It is possible to use an IP address here, but it is less convenient and rarely used.

:80 - port. The gate used to access resources on the web server. Omitted if the web server uses the standard HTTP ports. (HTTP - 80, HTTPS - 443). Otherwise it is mandatory.

/path/to/myfile.html - path to the resource on the web server. 

?key1=value1&key2=value2 - extra parameters provided to the web server. A list of key/value pairs seperated with the & symbol. The web server can use these parameters to do extra work before the resource is returned.

#SomewhereInTheDocument - an anchor to another part of the resource itself. For example can be used to scroll to a specific spot on the page.


### User-Agent String

examaple: Mozilla/4.03 [en] (WinNT; I ;Nav)