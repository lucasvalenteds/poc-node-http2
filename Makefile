MKCERT_VERSION = 1.4.1
MKCERT_FILE = mkcert
DOMAIN ?= localhost
PORT ?= 8443

install:
	@curl --silent --location --remote-header-name \
			--output $(MKCERT_FILE) \
			https://github.com/FiloSottile/mkcert/releases/download/v$(MKCERT_VERSION)/mkcert-v$(MKCERT_VERSION)-linux-amd64
	@chmod +x $(MKCERT_FILE)

certificate:
	@./$(MKCERT_FILE) $(DOMAIN)
	@./$(MKCERT_FILE) -install

clean:
	@rm $(DOMAIN).pem $(DOMAIN)-key.pem
	@./$(MKCERT_FILE) -uninstall

run:
	@DOMAIN=$(DOMAIN) PORT=$(PORT) npm start

request:
	@curl --verbose --http2 https://$(DOMAIN):$(PORT)
