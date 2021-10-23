# Projeto para lembretes ao João Pedro

A cada X tempo, será exibido um lembrete na tela (visual e sonoro) para ele lembrar que precisa comer.

Implementar:

[ ] tema conforme opção do dispositivo
[ ] aviso visual
    - tela piscando
    - imagem / gif / vídeo
[ ] avisos sonoros
    - frase
    - som de alerta
[ ] timer visual (cronômetro, linha de progresso)
[ ] música de fundo mario
[ ] desenhos / animações / jogos / fotos: mario, cuphead, baby looney tunes, bob esponja, minecraft, ana, cezar, miguel, vovô, colegas, priscila

```bash
# comandos usados

# ambiente com node
docker build -t lembretes-js-app .
docker run -it --rm --name lembretes-jp-running-app -v "$PWD":/home/app lembretes-js-app

# comandos para gerar css com tailwindcss
npx tailwindcss -o tailwind.css
npx tailwindcss init
npx tailwindcss -c tailwind.config.js -o tailwind.css

# gerar JSON com imagens salvas
node geraImagens

```