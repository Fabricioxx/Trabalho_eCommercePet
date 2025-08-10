## Projeto eCommerce Pet

Autores
- Murilo Henrique  
- Fabrício Rosa  
- Erickx Willian Oliveira De Souza

Especificação (slides): https://docs.google.com/presentation/d/1w3OPSgJkl2ju2ZNDJFrYlgMgPw7Jp6p2AUKVm7fGR-E/edit#slide=id.g1e1428d9ad1_0_0

---
## Visão Geral
Monorepo contendo:
- `api_ecommercePet`: API Node.js (Express + MongoDB + Swagger) com autenticação JWT, upload de imagens (Multer) e CRUD de clientes, categorias, produtos e pedidos.
- `front_react_ecommerce`: Aplicação React que consome a API (listagem, detalhes, carrinho, login, cadastro, etc.).

---
## Início Rápido
Clonar e entrar na pasta do projeto (exemplo):
```
git clone <url-do-repo>
cd Trabalho_eCommercePet
```
Instalar dependências das duas aplicações via script raiz:
```
npm install
npm run install:all
```
Criar arquivo `.env` (opcional) a partir de `.env.example` e ajustar valores.

Subir API + Front juntos (modo desenvolvimento):
```
npm run dev
```
Ou manualmente em dois terminais:
```
cd api_ecommercePet; npm run dev
cd front_react_ecommerce; npm start
```
Build de produção do frontend:
```
cd front_react_ecommerce
npm run build
```
Depois sirva a pasta `build/` (ex: com nginx, vercel, netlify ou um servidor estático como `npx serve -s build`).

---
## Estrutura de Pastas
```
api_ecommercePet/
	app.js
	bin/www                 # Inicialização do servidor (porta padrão 3001)
	database/mongodb.js     # Conexão MongoDB (mongodb://0.0.0.0:27017/eCommercePet)
	controllers/            # Lógica de negócio
	models/                 # Schemas Mongoose
	routes/                 # Rotas Express
	swagger.json            # Definição Swagger (acesso /api-docs)
	uploads/                # Upload temporário de imagens
front_react_ecommerce/
	src/                    # Componentes, páginas e rotas React
```

---
## Requisitos
- Node.js 18+ (recomendado)
- MongoDB em execução local (porta 27017) ou container equivalente

Opcional (dev): Docker para futuro empacotamento.

---
## Backend (API)
Local: `api_ecommercePet`

Instalação de dependências (já listadas no package.json):
```
cd api_ecommercePet
npm install
```
Executar em modo normal:
```
npm start
```
Padrão: http://localhost:3001

Documentação Swagger: http://localhost:3001/api-docs

### Principais Rotas
- `GET /produtos` – Lista produtos
- `POST /produtos` – Cria produto (suporta upload de imagem via campo `imagem` – Multer)
- `GET /produtos/:codigo` – Detalhe
- `PUT /produtos/:codigo` – Atualiza
- `DELETE /produtos/:codigo` – Remove
- `POST /login` – Autenticação (JWT)
- `GET /clientes` / `POST /clientes` – CRUD clientes
- `GET /categorias` / `POST /categorias`
- `GET /pedidos` / `POST /pedidos`

### Banco de Dados
Configuração padrão em `database/mongodb.js`:
```
mongodb://0.0.0.0:27017/eCommercePet
```
Para usar outra URL, ajuste a constante `URL` ou evolua para ler de variável de ambiente (ex: `MONGODB_URI`).

### Upload de Imagens
Implementado no controller de produto. A imagem é lida do arquivo temporário e armazenada em binário dentro do documento (campo `imagem.data`). Para produção, considerar armazenar em serviço externo (S3, Cloud Storage) ou servir via filesystem/CDN.

### Autenticação
Feita com `jsonwebtoken` e `bcryptjs` (hash de senha). Garanta que endpoints sensíveis validem o token (middleware pode ser adicionado se ainda não existir).
Modo desenvolvimento (reinício automático com nodemon):

---
## Frontend (React)
Local: `front_react_ecommerce`
Configuração padrão agora suporta variável de ambiente `MONGODB_URI`.
Se não definida, usa:
```
mongodb://0.0.0.0:27017/eCommercePet
```
Defina um `.env` (baseado em `.env.example`):
```
MONGODB_URI=mongodb://0.0.0.0:27017/eCommercePet
PORT=3001
JWT_SECRET=troque-esta-string-super-secreta
```
```
Execução (porta padrão 3000):
```
npm start
```
Aplicação acessa a API em `http://localhost:3001` (ajuste se necessário em arquivos de serviço / variáveis de ambiente). Criar um arquivo `.env` (opcional) como:
```
REACT_APP_API_BASE=http://localhost:3001
```
E usar `process.env.REACT_APP_API_BASE` nos fetch/axios.

### Bibliotecas Principais
- react-router-dom (rotas)
- bootstrap / react-bootstrap / bootstrap-icons (UI)
- jsonwebtoken / jwt-decode (auth cliente)

---
## Scripts Úteis
Backend:
```
cd api_ecommercePet
npm start
```
Frontend:
```
cd front_react_ecommerce
npm start
```

Para executar ambos (em dois terminais):
```
cd api_ecommercePet; npm start
cd front_react_ecommerce; npm start
```

### Executar API + Front juntos (raiz)
Na raiz do repositório foi adicionado um `package.json` com `concurrently`.

Instalar dependências de ambos:
```
npm run install:all
```
Iniciar (API + Front):
```
npm run dev
```
O script:
```
concurrently -n API,WEB -c green,cyan "npm run dev --prefix api_ecommercePet" "wait-on tcp:3001 && npm start --prefix front_react_ecommerce"
```
Explicação rápida:
- `--prefix pasta` executa scripts dentro das subpastas.
- Primeiro sobe a API com nodemon (`npm run dev`).
- `wait-on tcp:3001` aguarda a porta da API antes de iniciar o frontend (evita erros iniciais de fetch).
- `concurrently` mostra logs etiquetados (API / WEB) com cores.

---
## Próximas Melhorias (Sugestões)
- Adicionar middleware de autenticação JWT centralizado.
- Mover string de conexão Mongo para variável de ambiente.
- Criar script `dev` na API usando nodemon (ex: `"dev": "nodemon ./bin/www"`).
- Separar armazenamento de imagens (S3 / pasta pública) em vez de blob no Mongo.
- Adicionar testes (Jest / Supertest) para endpoints principais.

---
## Histórico de Geração
Projeto gerado inicialmente com `express-generator --view=pug` e `create-react-app`.

---
## Licença
MIT

