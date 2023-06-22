# Trabalho_eCommercePet


 Especificação: https://docs.google.com/presentation/d/1w3OPSgJkl2ju2ZNDJFrYlgMgPw7Jp6p2AUKVm7fGR-E/edit#slide=id.g1e1428d9ad1_0_0

**backend**
```
 npx express-generator --view=pug api_ecommercePet// Instalação no express
 npm install mongoose // MongoDB
 npm install nodemon // Instalação do nodemon - ODM para banco não relacional
 npm install cors // para comunicação entre front e back
 npm install swagger-ui-express -S // Documentação swagger
 npm install multer // upload
 npm install bcryptjs // criptografia
 npm install jsonwebtoken // token
 
    

 npm run start 

```
http://localhost:3001/

http://localhost:3001/api-docs (doc swagger)


**frontend**
```
npx create-react-app front_ecommercePet
npm install react-router-dom // para Rotas
npm install bootstrap // usar bootstrap (index.js import 'bootstrap/dist/css/bootstrap.css';)

npm i bootstrap-icons // bibliotecas de icones bootstrap

npm install react-bootstrap bootstrap // componentes prontos bootstrap

npm install jsonwebtoken // token
npm install jwt-decode // token decode


npm start

```