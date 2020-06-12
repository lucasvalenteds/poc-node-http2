# POC: HTTP/2

It demonstrates how to run a [Node.js](https://github.com/nodejs/node) server that responds [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) using a development-only [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) certificate generated using [mkcert](https://github.com/FiloSottile/mkcert).

We want the HTTP responses encrypted and streamed.

## How to run

### TLS certificate

| Description | Command |
| :--- | :--- |
| Download mkcert | `make download` |
| Generate TLS certificate | `make certificate` |

### Server

| Description | Command |
| :--- | :--- |
| Install dependencies | `npm install` |
| Run tests | `npm run test` |
| Run server | `make run` |
| Send HTTP request | `make request` |

## Preview

```
*   Trying 127.0.0.1:8443...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 8443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* successfully set certificate verify locations:
*   CAfile: /etc/ssl/certs/ca-certificates.crt
  CApath: /etc/ssl/certs
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384
* ALPN, server accepted to use h2
* Server certificate:
*  subject: O=mkcert development certificate; OU=******@******
*  start date: Jun  1 00:00:00 2019 GMT
*  expire date: Jun 12 17:47:20 2030 GMT
*  subjectAltName: host "localhost" matched cert's "localhost"
*  issuer: O=mkcert development CA; OU=******@******; CN=mkcert ******@******
*  SSL certificate verify ok.
* Using HTTP2, server supports multi-use
* Connection state changed (HTTP/2 confirmed)
* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
* Using Stream ID: 1 (easy handle 0x556fe3370db0)
> GET / HTTP/2
> Host: localhost:8443
> user-agent: curl/7.68.0
> accept: */*
> 
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
* Connection state changed (MAX_CONCURRENT_STREAMS == 4294967295)!
< HTTP/2 200 
< content-type: application/json
< date: Fri, 12 Jun 2020 17:48:38 GMT
< 
* Connection #0 to host localhost left intact
{"message":"Hello World!"}
```
