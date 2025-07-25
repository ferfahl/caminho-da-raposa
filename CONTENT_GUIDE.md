# Guia de Conteúdo Flexível - Caminho da Raposa

## Como Criar Conteúdo Modular com Imagens

Agora você pode criar conteúdo educativo muito mais rico e visualmente atrativo usando o novo sistema de seções flexíveis.

### Formato Antigo vs. Novo

**Formato Antigo (ainda funciona):**
```json
{
  "content": "<h3>Título</h3><p>Texto aqui...</p>"
}
```

**Novo Formato Flexível:**
```json
{
  "sections": [
    {
      "type": "heading",
      "content": "Título"
    },
    {
      "type": "text", 
      "content": "<p>Texto aqui...</p>"
    }
  ]
}
```

### Tipos de Seções Disponíveis

#### 1. Título (heading)
```json
{
  "type": "heading",
  "content": "Seu Título Aqui"
}
```

#### 2. Texto (text)
```json
{
  "type": "text",
  "content": "<p>Texto com <strong>formatação HTML</strong> permitida.</p>"
}
```

#### 3. Imagem (image)
```json
{
  "type": "image",
  "content": "https://exemplo.com/sua-imagem.jpg",
  "alt": "Descrição da imagem para acessibilidade",
  "caption": "Legenda opcional da imagem"
}
```

#### 4. Lista (list)
```json
{
  "type": "list",
  "items": [
    "Primeiro item da lista",
    "Segundo item",
    "Terceiro item"
  ]
}
```

### Exemplo Completo de Módulo

```json
{
  "id": 1,
  "title": "Meu Módulo",
  "description": "Descrição do módulo",
  "readingTime": "10min",
  "quizTime": "5min",
  "content": "",
  "sections": [
    {
      "type": "heading",
      "content": "Introdução"
    },
    {
      "type": "text",
      "content": "<p>Este é um parágrafo introdutório explicando o conceito.</p>"
    },
    {
      "type": "image",
      "content": "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      "alt": "Raposa usando computador",
      "caption": "Exemplo visual do conceito"
    },
    {
      "type": "heading",
      "content": "Pontos Importantes"
    },
    {
      "type": "list",
      "items": [
        "Primeiro ponto importante",
        "Segundo ponto",
        "Terceiro ponto"
      ]
    },
    {
      "type": "text",
      "content": "<p>Parágrafo de conclusão com <em>ênfase</em> em pontos importantes.</p>"
    }
  ],
  "quiz": [...]
}
```

### Vantagens do Sistema Flexível

1. **Organização Visual**: Cada tipo de seção tem seu próprio estilo
2. **Imagens Integradas**: Adicione imagens facilmente com legendas
3. **Fácil Edição**: Cada seção é independente
4. **Compatibilidade**: Funciona junto com o formato antigo
5. **Flexibilidade**: Combine seções em qualquer ordem

### Como Adicionar Imagens

1. **Imagens Online**: Use URLs diretas de serviços como Unsplash
2. **Imagens Locais**: Coloque na pasta `attached_assets/` e use o caminho

Exemplo com imagem local:
```json
{
  "type": "image",
  "content": "@assets/minha-imagem.png",
  "alt": "Minha imagem",
  "caption": "Descrição da imagem"
}
```

### Dicas de Boas Práticas

- **Use títulos** para dividir o conteúdo em seções lógicas
- **Adicione imagens** para tornar o conteúdo mais visual
- **Escreva legendas** descritivas para as imagens
- **Combine listas e texto** para melhor legibilidade
- **Mantenha parágrafos curtos** para facilitar a leitura

### Para Adicionar Nova Trilha

1. Crie arquivo JSON na pasta `client/src/data/`
2. Adicione a trilha em `trails.json`
3. Registre no `trail-loader.ts`
4. Use o formato `sections` para conteúdo flexível