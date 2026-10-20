# BioViva — plataforma de estudos de Biologia

Site estático (HTML + CSS + JavaScript puro, sem build) para estudo de Biologia, com:

- **Conteúdos** — 6 trilhas com resumo em modal, busca sem acento e filtro por categoria.
- **Flashcards** — 8 cartões com virada, progresso e atalhos de teclado (← →).
- **Questões** — 5 questões com correção automática, gabarito comentado e placar.
- **Redação** — 8 temas divididos em dois eixos (Saúde e Meio ambiente).
- **PWA** — instalável no celular e no computador, com atalhos para Flashcards, Questões e Redação, e funciona offline.

## Arquivos do PWA

| Arquivo | Função |
| --- | --- |
| `manifest.json` | Manifesto do app (nome, ícones, cor da barra, atalhos). |
| `sw.js` | Service worker: cache do app, uso offline e atualização de versão. |
| `icons/` | Ícones 192, 512, maskable (Android), apple-touch-icon e favicon SVG. |

Ao mexer no `sw.js`, troque a constante `VERSION` para forçar a atualização do cache nos
usuários que já avaliaram o site.

## Rodando localmente

Abra `index.html` no navegador. Para testar via servidor local:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Publicação

O site é publicado com GitHub Pages a partir da branch `main` (raiz do repositório).
O arquivo `.nojekyll` faz o Pages servir os arquivos estáticos exatamente como estão.
