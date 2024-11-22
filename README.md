# Agropesca Jacaré - Absolute Cinema 🎥

Este é um projeto de um sistema de cinema desenvolvido com **Next.js** e **React**. O objetivo do projeto é simular a escolha de assentos em uma sala de cinema, com alternância entre temas claro e escuro, cálculo dinâmico do valor total e exibição de informações sobre o filme.

---

## Tecnologias Utilizadas

- **Next.js (React)**: Framework para renderização de páginas e gerenciamento de estado.
- **CSS Modules**: Para estilização modular de componentes.
- **React Icons**: Biblioteca de ícones para a interface.
- **HTML5** e **Flexbox**: Para estruturação e posicionamento de elementos.
- **Media Queries**: Para responsividade e alternância de temas.

---

## Funcionalidades

- **Seleção de Assentos**:
  - Assentos podem ser selecionados, desmarcados ou exibidos como "indisponíveis".
  - Os estados dos assentos são dinâmicos e refletidos visualmente.

- **Cálculo do Valor Total**:
  - O preço total da compra é atualizado dinamicamente conforme os assentos são selecionados.

- **Renderização Condicional**:
  - O componente de informações é exibido em diferentes posições com base no tamanho da tela (desktop ou mobile).

- **Modo Claro/Escuro**:
  - O tema inicial é baseado na preferência do navegador.
  - O usuário pode alternar manualmente entre os temas.

- **Loading**:
  - Uma animação simples é exibida enquanto os dados são carregados.

---

## Estrutura do Projeto

```
public/
│   └──  dados.json
src/
├── app/
│   ├── Assento/
│   │   ├── Assento.js
│   │   └── Assento.module.css
│   ├── Infos/
│   │   ├── Infos.js
│   │   └── Infos.module.css
│   ├── Loading/
│   │   ├── Loading.js
│   │   └── Loading.module.css
│   ├── Sala/
│   │   ├── Sala.js
│   │   └── Sala.module.css
│   ├── fonts/
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── page.module.css
├── hooks/
│   ├── useCalculateTotal.js
│   ├── useFetchFilmes.js
│   ├── useLightMode.js
│   └── useResize.js
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
└── next.config.mjs
```

---

## Executando o Projeto

### Pré-requisitos:
- Node.js (>=16.0.0)
- npm ou yarn

### Passos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Lpins01/POC-6
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

    ```bash
   yarn
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## Funcionalidades

### **HTML5 e Flexbox**:
- Utilização de estrutura semântica e posicionamento com `display: flex` em diversos componentes, como a sala de cinema.

### **Media Query**:
- Modo claro/escuro e responsividade para dispositivos móveis.

### **Componentização**:
- Os componentes principais, como `Sala`, `Assento`, e `Infos`, estão modularizados.

### **Renderização Condicional**:
- A posição do componente `Infos` muda dinamicamente com base no estado `isMobile`.

### **Cálculo do Valor Total**:
- O hook `useCalculateTotal` calcula dinamicamente o valor total com base nos assentos selecionados.

---

## Imagens

### Modo Escuro
![Modo Escuro](https://github.com/user-attachments/assets/3463678b-ef3c-4176-947b-ee645c6fe527)

### Modo Claro
![Modo Claro](https://github.com/user-attachments/assets/d4c2ed92-d08e-4490-b553-b3576801b413)

---

## Grupo

- Lucas Rocha - 10391076
- Luiz Saraiva - 10374379
- Leonardo Pinheiro - 10388961
- Fábio Sabino - 10277530
