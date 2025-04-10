deploy:
	docker build --platform linux/amd64 -t ivanmachine/tesseract.no:latest -f Dockerfile .
	docker push ivanmachine/tesseract.no:latest
	git push && git push origin main:deploy_frontend -f
