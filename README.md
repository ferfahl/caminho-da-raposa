
# 🦊 Caminho da Raposa

Plataforma educacional interativa voltada para a **conscientização em segurança digital**.  
Desenvolvida com foco em **usuários não técnicos**, utilizando **gamificação** e **módulos independentes** de ensino.

> **Versão online (temporária):** [https://caminhodaraposa.netlify.app/](https://caminhodaraposa.netlify.app/)

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

- **[Vite](https://vitejs.dev/)** – Ferramenta de build e bundling  
- **[TailwindCSS](https://tailwindcss.com/)** – Estilização responsiva  
- **[TypeScript](https://www.typescriptlang.org/)** – Desenvolvimento tipado  
- **[React](https://reactjs.org/)** – Construção de componentes  
- **[ESBuild](https://esbuild.github.io/)** – Empacotamento do código do servidor (não usado no deploy estático)  
- **[Netlify](https://www.netlify.com/)** – Deploy contínuo e hospedagem estática

---

## 📂 Estrutura do Projeto

```
├── public/                # Arquivos estáticos base
├── src/                   # Código-fonte do front-end
│   ├── components/        # Componentes React reutilizáveis
│   ├── modules/           # Módulos de aprendizagem
│   ├── assets/            # Imagens e recursos
│   └── styles/            # Estilos globais
├── server/                # Código do servidor (não usado no deploy estático)
├── dist/                  # Resultado do build de produção
│   ├── public/            # Arquivos prontos para deploy estático
│   └── index.js           # Build do backend (não utilizado)
├── netlify.toml           # Configuração do deploy no Netlify
├── package.json           # Dependências e scripts
└── README.md              # Este arquivo
```

---

## 🔧 Pré-requisitos

- **Node.js:** 18.x ou superior  
- **npm:** 9.x ou superior  
- **Git:** Para clonar o repositório

---

## ▶️ Como Executar Localmente

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/ferfahl/caminho-da-raposa.git
   cd caminho-da-raposa
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Rodar em ambiente de desenvolvimento**
   ```bash
   npm run dev
   ```
   O projeto ficará disponível em:
   ```
   http://localhost:5173
   ```

4. **Gerar build de produção**
   ```bash
   npm run build
   ```
   Os arquivos finais estarão em:
   ```
   dist/public
   ```

5. **Servir a build localmente (opcional)**
   ```bash
   npm run preview
   ```

---

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👩‍💻 Autoria

Desenvolvido por **Fernanda Fahl** como parte do **TCC do MBA em Engenharia de Software – USP/ESALQ**.
