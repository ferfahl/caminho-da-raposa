
# 🦊 Caminho da Raposa

Plataforma educacional interativa voltada para a **conscientização em segurança digital**.  
Desenvolvida com foco em **usuários não técnicos**, utilizando **gamificação** e **módulos independentes** de ensino.

> **Versão online (temporária):** [https://caminho-da-raposa.netlify.app/](https://caminho-da-raposa.netlify.app/)

---

## ✨ Funcionalidades Principais

- **Trilhas de Aprendizagem**  
  Estruturadas em módulos independentes que podem ser duplicados e adaptados.

- **Quizzes Interativos**  
  Ao final de cada módulo, reforçam a aprendizagem com feedback imediato.

- **Gamificação**  
  Pontuação, conquistas e progresso por usuário.

- **Mascote Exclusivo – Raposa Aventureira do Conhecimento**  
  Guia lúdico que acompanha o aluno na jornada de aprendizado.

---

## 🎨 Identidade Visual

**Paleta de Cores:**

| Elemento                | Cor (HEX)  |
|-------------------------|------------|
| Fundo geral             | `#F4F0FA` |
| Títulos (Headings)      | `#5C2A7C` |
| Texto principal         | `#2D2D2D` |
| Fundo de destaque       | `#3E4B7E` |
| Fundo de cartões        | `#FAFAFA` |
| Bordas e divisores      | `#D9D3E5` |
| Botão primário          | `#C75EEB` |
| Botão secundário        | `#A16FCF` |
| Hover botão             | `#B347DC` |
| Links                   | `#6C63FF` |
| Feedback positivo       | `#B6E3C4` |
| Feedback negativo       | `#F7A6A6` |

---

## 🚀 Tecnologias Utilizadas

- **[Bolt.new](https://bolt.new/)** – Criação rápida de interface  
- **HTML5 / TailwindCSS** – Estilização baseada em design responsivo  
- **JavaScript (ES6+)** – Interatividade dos módulos e quizzes  
- **Netlify** – Publicação e CI/CD

---

## 📂 Estrutura do Projeto

```
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis (cards, quizzes, menus)
│   ├── modules/         # Conteúdos independentes de cada trilha
│   ├── assets/          # Imagens (incluindo mascote)
│   └── styles/          # Tailwind + customizações
├── index.html           # Página inicial
├── tailwind.config.js   # Configuração Tailwind
└── README.md            # Este arquivo
```

---

## 🔧 Como Executar Localmente

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/SEU_USUARIO/caminho-da-raposa.git
   cd caminho-da-raposa
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Rodar localmente**
   ```bash
   npm run dev
   ```
   O projeto estará disponível em: `http://localhost:3000`

4. **Build para produção**
   ```bash
   npm run build
   ```

---

## 📢 Status do Projeto

- **Fase:** Protótipo navegável  
- **Próximos passos:**
  - Implementar área de usuário com autenticação  
  - Adicionar persistência de progresso  
  - Conectar conteúdo dinâmico via API

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👩‍💻 Autoria

Desenvolvido por **Fernanda Fahl** como parte do **TCC do MBA em Engenharia de Software – USP/ESALQ**.
