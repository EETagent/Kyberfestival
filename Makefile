all: deploy

# Statické cesty, jednoduché změnit
# Sestavení dokumentů a nahrání na server
# --tounicode 1 důležitá část, opravuje chyby fontů při konverzi
deploy:
	flatpak run org.libreoffice.LibreOffice/x86_64/stable --headless --convert-to pdf /home/thinkpad/Dokumenty/Robota/Konference/Web/program/Konference.docx --outdir /home/thinkpad/Dokumenty/Robota/Konference/Web/lang/cz
	mv /home/thinkpad/Dokumenty/Robota/Konference/Web/lang/cz/Konference.pdf /home/thinkpad/Dokumenty/Robota/Konference/Web/lang/cz/program.pdf
	pdf2htmlEX /home/thinkpad/Dokumenty/Robota/Konference/Web/lang/cz/program.pdf program.html --tounicode 1
	mv ./program.html /home/thinkpad/Dokumenty/Robota/Konference/Web/lang/cz/program.html
	scp -r /home/thinkpad/Dokumenty/Robota/Konference/Web/lang/cz root@75.119.149.184:/root/Kyberfestival/Web/source/lang
	scp -r /home/thinkpad/Dokumenty/Robota/Konference/Web/lang/en root@75.119.149.184:/root/Kyberfestival/Web/source/lang
	scp -r /home/thinkpad/Dokumenty/Robota/Konference/Web/js root@75.119.149.184:/root/Kyberfestival/Web/source/
	scp -r /home/thinkpad/Dokumenty/Robota/Konference/Web/css root@75.119.149.184:/root/Kyberfestival/Web/source/
	scp -r /home/thinkpad/Dokumenty/Robota/Konference/Web/images root@75.119.149.184:/root/Kyberfestival/Web/source/
	scp -r /home/thinkpad/Dokumenty/Robota/Konference/Web/mail root@75.119.149.184:/root/Kyberfestival/Web/source/
	scp -r /home/thinkpad/Dokumenty/Robota/Konference/Web/.well-known root@75.119.149.184:/root/Kyberfestival/Web/source/
	scp /home/thinkpad/Dokumenty/Robota/Konference/Web/sitemap.xml root@75.119.149.184:/root/Kyberfestival/Web/source/
	scp /home/thinkpad/Dokumenty/Robota/Konference/Web/robots.txt root@75.119.149.184:/root/Kyberfestival/Web/source/


	ssh root@75.119.149.184 "cd Kyberfestival/Web && docker-compose down && docker-compose build && docker-compose up -d"
# Spuštění serveru
start:
	ssh root@75.119.149.184 "cd Kyberfestival/Web && docker-compose up -d"
# Pozastavení serveru
stop:
	ssh root@75.119.149.184 "cd Kyberfestival/Web && docker-compose down"
# Editace dokumentu s programem
edit:
	flatpak run org.libreoffice.LibreOffice/x86_64/stable /home/thinkpad/Dokumenty/Robota/Konference/Web/program/Konference.docx