# 🌟 Portfólio — Tamires Guedes
**React + JavaScript + Vite**

## 📁 Estrutura de arquivos

```
src/
├── components/
│   ├── Nav.jsx          # Navegação fixa com scroll suave
│   ├── Hero.jsx         # Seção inicial com upload de foto
│   ├── About.jsx        # Sobre mim + estatísticas
│   ├── Skills.jsx       # Habilidades técnicas
│   ├── Experience.jsx   # Experiência profissional (timeline)
│   ├── Courses.jsx      # Cursos & Certificações com filtros
│   ├── Projects.jsx     # Projetos selecionados
│   ├── Contact.jsx      # Formulário de contato real
│   ├── Footer.jsx       # Rodapé
│   └── FadeIn.jsx       # Animação de entrada por scroll
├── data/
│   └── portfolio.js     # ✏️  EDITE AQUI seus dados
├── hooks/
│   └── useFadeIn.js     # Hook de animação
├── styles/
│   ├── globals.css
│   ├── Nav.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Experience.css
│   ├── Courses.css
│   ├── Projects.css
│   └── Contact.css
├── App.jsx              # Orquestração + refs de scroll
└── main.jsx             # Entry point
```

## 🚀 Como rodar

```bash
npm install
npm run dev
```
## ✏️ Editar conteúdo

Tudo em **`src/data/portfolio.js`**:
- `skillsData` — habilidades
- `experienceData` — experiências
- `coursesData` — cursos e certificações
- `projectsData` — projetos (atualize `demo` e `code` com seus links)
- `contactInfo` — contatos

## 🛠️ Build para produção

```bash
npm run build
```