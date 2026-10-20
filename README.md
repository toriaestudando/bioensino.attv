# BioViva — plataforma de estudos de Biologia

Site estático (HTML + CSS + JavaScript puro, sem build) para estudo de Biologia, com:

- **Conteúdos** — 6 trilhas com resumo em modal, busca sem acento e filtro por categoria.
- **Flashcards** — 8 cartões com virada, progresso e atalhos de teclado (← →).
- **Questões** — 5 questões com correção automática, gabarito comentado e placar.
- **Redação** — 8 temas divididos em dois eixos (Saúde e Meio ambiente).

## Rodando localmente

Abra `index.html` no navegador. Para testar via servidor local:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Publicação

O site é publicado com GitHub Pages a partir da branch `main` (raiz do repositório).
O arquivo `.nojekyll` faz o Pages servir os arquivos estáticos exatamente como estão.
