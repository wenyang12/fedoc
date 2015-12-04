 
PROJECT = "文档平台";


build: ;@echo "发布中 ${PROJECT}....."; \
	gulp copy
	gulp compress
	pm2  restart fedoc

