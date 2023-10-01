# Sistema da Ápice para projeto de estágio!
Construindo sistema fullstack p/ apice com React, NodeJS, ExpressJS, Sequelize e MySQL

# Backend do Aplicativo do sistema da Ápice - README

Este é o backend do projeto de aplicativo de gerenciamento da Ápice sistemas, desenvolvido em Javascript com NodeJS e ExpressJS. O backend fornece as APIs para o web em React a se conectarem e obterem todos os dados necessários para melhor gerenciamento.

## Tecnologias Utilizadas

- Backend: NodeJS, ExpressJS (Javascript)
- Build tool c/ npm, Yarn e configurações com .env
- Banco de Dados: MySQL, 

## Configuração

1. Clone este repositório.
2. Configure as variáveis de ambiente, como informações do banco de dados, no arquivo `package.json`.
3. cd para src/
4. Execute o aplicativo usando o node:

## Estrutura do Projeto

A estrutura do projeto NodeJS gerenciado pelo npm (Node Package Manager) em combinação com o  "Node.js Package Manager" (nvm) ou o "Yarn" segue a seguinte organização:

- `apice_sistema/src/`: Pacote principal.
- `controllers`: Os controladores são funções que respondem às solicitações HTTP e executam a lógica de negócios.
- `models`: Modelos de dados da aplicação.
- `routes`:  As rotas são usadas para definir como o servidor deve responder a diferentes solicitações HTTP.
- `service`: Camada de serviço que lida com a lógica de negócios.

## API Endpoints

### Produtos

- **GET /produtos**
    - Descrição: Retorna todos os produtos.
    - Uso: `GET /api/produtos`
    - Resposta:
  ```json
  {
    "data": [
        {
            "id_produto": 1,
            "nome_produto": "mouse",
            "valor_produto": "29.99"
        },
        {
            "id_produto": 5,
            "nome_produto": "caneta BIC preta",
            "valor_produto": "2.99"
        },
        {
            "id_produto": 6,
            "nome_produto": "Marca texto Masterprint",
            "valor_produto": "5.99"
        },
        {
            "id_produto": 7,
            "nome_produto": "Caneta azul BIC",
            "valor_produto": "1.99"
        },
        {
            "id_produto": 8,
            "nome_produto": "Copo stanley",
            "valor_produto": "50.99"
        },
        {
            "id_produto": 9,
            "nome_produto": "Copo stanley 2",
            "valor_produto": "50.99"
        },
        {
            "id_produto": 10,
            "nome_produto": "Copo stanley 3",
            "valor_produto": "50.99"
        },
        {
            "id_produto": 11,
            "nome_produto": "Estojo IFPR",
            "valor_produto": "12.99"
        },
        {
            "id_produto": 12,
            "nome_produto": "Mircrofone",
            "valor_produto": "40.99"
        }
    ]
}

- **GET /produtos/:id**
    - Descrição: Retorna um produto específico com base no ID.
    - Uso: `GET /api/produtos/:id`
    - Resposta:
    ```json
  {
    "data": {
        "id_produto": 1,
        "nome_produto": "mouse",
        "valor_produto": "29.99"
      }
  }

- **POST /produtos**
    - Descrição: Cria um novo produto.
    - Uso: `POST /produtos`
    - Corpo da requisição:
  ````json
  {
    "nome_produto": "Mouse",
    "valor_produto": 12.99
  }

- **PUT /produtos/:id**
    - Descrição: Atualiza um produto existente com base no ID.
    - Uso: `PUT /api/produtos/:id`

- **DELETE /produtos/:id**
    - Descrição: Exclui um produto existente com base no ID.
    - Uso: `DELETE /api/produtos/:id`

### Bairros

- **GET /bairros**
    - Descrição: Retorna todos os bairros.
    - Uso: `GET /api/bairros`
    - Resposta de sucesso:
    ```json
    {
        "data": [
            {
                "id_bairro": 1,
                "bairro_nome": "Jardins"
            },
            {
                "id_bairro": 2,
                "bairro_nome": "Leblon"
            }
        ]
    }

- **GET /bairros/:id**
    - Descrição: Retorna um bairro específico com base no ID.
    - Uso: `GET /api/bairros/:id`
    - Reposta de sucesso:
    ```json
    {
        "data": {
            "id_bairro": 2,
            "bairro_nome": "Leblon"
        }
    }

- **POST /bairros**
    - Descrição: Cria um novo bairro.
    - Uso: `POST /api/bairros`
    - Corpo da requisição:
    ```
    {
        "bairro_nome": "Batel"
    }
    ```
    - Resposta de sucesso:
    ```json
    {
        "message": "Bairro criado com sucesso"
    }

- **PUT /bairros/:id**
    - Descrição: Atualiza um bairro existente com base no ID.
    - Uso: `PUT /api/bairros/:id`

- **DELETE /bairros/:id**
    - Descrição: Exclui um bairro existente com base no ID.
    - Uso: `DELETE /api/bairros/:id`

### Cidades

- **GET /cidades**
    - Descrição: Retorna todas as cidades.
    - Uso: `GET /api/cidades`

- **GET /cidades/:id**
    - Descrição: Retorna uma cidade específica com base no ID.
    - Uso: `GET /api/cidades/:id`

- **POST /cidades**
    - Descrição: Cria uma nova cidade.
    - Uso: `POST /api/cidades`

- **PUT /cidades/:id**
    - Descrição: Atualiza uma cidade existente com base no ID.
    - Uso: `PUT /api/cidades/:id`

- **DELETE /cidades/:id**
    - Descrição: Exclui uma cidade existente com base no ID.
    - Uso: `DELETE /api/cidades/:id`

### Pessoas

- **POST /pessoas**
    - Descrição: Cria uma nova pessoa.
    - Uso: `POST /api/pessoas`
    - Corpo da requisição:
    ```json
    {
        "pessoa_nome": "John Doe",
        "cep": "12345-678",
        "endereco": "123 Main Street",
        "numero": "101",
        "complemento": "Apt 2B",
        "telefone": "555-555-5555",
        "email": "johndoe@example.com",
        "bairro_id": 1,
        "cidade_id": 1 
    }

### Vendas

- **POST /vendas**
    - Descrição: Cria uma nova venda.
    - Uso: `POST /api/vendas`
    - Corpo da requisição:
    ```json
    {
    "pessoa_id": 1,
    "valor_venda": 100
    }
    
- **GET /vendas**
- Descrição: Pega todas as vendas.
- Uso: `GET api/vendas`
- Corpo da requisição:
```json
{
    "data": [
        {
            "id_venda": 1,
            "pessoa_id": 3,
            "valor_venda": "100.00"
        }
    ]
}

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para enviar pull requests ou relatar problemas na seção de issues.
