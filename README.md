# iFood Clone

Este projeto é um clone do iFood, desenvolvido utilizando Next.js, React e Tailwind CSS no Front End, e Golang, Gin e Gorm no Back End. A aplicação é dividida em dois repositórios: um para o Front End e outro para o Back End. 

## Descrição

Este projeto é um clone do iFood, desenvolvido para fins de estudo e prática de tecnologias web modernas. A aplicação permite visualizar uma lista de produtos, restaurantes e categorias, simulando algumas funcionalidades básicas de um aplicativo de delivery de comida.

## Tecnologias Utilizadas

**Front End:**
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

**Back End:**
- [Golang](https://golang.org/)
- [Gin Framework](https://gin-gonic.com/)
- [Gorm ORM](https://gorm.io/)

## Funcionalidades

- Visualização de produtos
- Visualização de restaurantes
- Visualização de categorias
- Pesquisar por restaurante
- Adicionar produtos a um carrinho

## Deploy

**Front End:** [Vercel](https://ifood-clone-gray.vercel.app/)

**Back End:**
- [GET /products](https://ifood-clone-production.up.railway.app/products)
- [GET /restaurants](https://ifood-clone-production.up.railway.app/restaurants)
- [GET /categories](https://ifood-clone-production.up.railway.app/categories)

## Instalação e Uso

### Front End

1. Clone o repositório:
    ```bash
    git clone https://github.com/isaquerchaves/ifood-clone.git
    cd ifood-clone/front-end
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação em execução.

### Back End

1. Clone o repositório:
    ```bash
    git clone https://github.com/isaquerchaves/ifood-clone.git
    cd ifood-clone/back-end
    ```

2. Instale as dependências:
    ```bash
    go mod tidy
    ```

3. Configure as variáveis de ambiente no arquivo `.env`:
    ```env
    DB_HOST=your_database_host
    DB_PORT=your_database_port
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    ```

4. Inicie o servidor:
    ```bash
    go run main.go
    ```

5. O servidor estará rodando em [http://localhost:8080](http://localhost:8080).

## API Endpoints

- **GET /products:** Retorna a lista de produtos.
- **GET /restaurants:** Retorna a lista de restaurantes.
- **GET /categories:** Retorna a lista de categorias.
