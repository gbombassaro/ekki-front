# Ekki Frontend
Projeto front-end que simula uma aplicação web responsiva para um banco.

```npm install```
```npm start```

<br/>
<br/>

## Funcionalidades:
- Abrir conta
- Autenticar um usuário (simples - somente front-end)
- Cadastrar um usuário favorecido (somente CPF já cadastrado no banco)
- Realizar uma transferência para um usuário favorecido
- Ver o histórico de transferências

## Dependencies
- axios para lidar com as requisições da aplicação
- lodash para tratamento de dados
- date-fns para parse de datas
- prop-types para documentação rápida dos componentes
- styled-components como API de estilos
- styled-system como facilitador do uso da API de estilos (https://styled-system.com/getting-started)
- react-router para gerenciamento de rotas da aplicação

## Dev-dependecies
- Eslint para padronização de código rodando com husky e lint-staged durante o commit

<br/>
<br/>

## State
Foi utilizada a React context API para distribuir um contexto de dados no projeto. Existe um componente Provider, responsável por distribuir os dados para as rotas e deixá-los acessíves via props nos componentes. Existem 3 funções que podem ser acessadas globalmente utilizando props:

- dispatch()
  Dispara ações do estado global, realizando alterações e atualizando os componentes.
  > DATA/LOAD

  > DATA/UPDATE

  > NOTIFICATION/SHOW

  > NOTIFICATION/CLOSE

  > USER/SET_AUTH_USER

- loadUsers()
  Busca na API a lista de usuários (autenticação simplificada)

- updateData()
  Busca na API os dados do usuário autenticado

<br/>
<br/>

## Estilos
O app está conectado por um theme que é propagado para a API do styled-components e também para aqueles styled-components que estão conectados ao styled-system. Com isso é possível utilizar design-tokens diretamente nas props da seguinte forma:

```<StyledComponent color="secondary" />```

<pre>
  {
    colors: {
      primary: 'green',
      secondary: '#333333',
      white: '#FFFFFF'
    },
    breakpoints: ['600px', '960px', '1280px'],
    space: [0, 4, 8, 16, 32, 64]
  }
</pre>

### Design responsivo
O design responsivo fica em grande parte por conta do styled-system e é aplicado da seguinte forma:
```<StyledComponent fontSize={['16px', '18px']}/>```

A prop desejada deve receber um array. As posições correspondem ao tamanho de breakpoint definido no theme. Os valores corresponde ao valor CSS que será aplicado na querie correspondente a posição.

<br/>
<br/>

## Componentes
O app está divido em base-components e pages. Base-components são peças genéricas e flexíveis que podem ser utilizadas em vários lugares. Pages são componentes específicos e não genéricos que serão chamados pelo router. Eles importam os base-components e montam a tela final.

### Base-components
>Box

>Section

>Typography

>Button

>Input

>Form

>User

>UserList

>UnauthorizedUser

>Notification

>Header

>Grid


### Pages
>SelectUser

>Home

>Favored (favorecido)

>NewTransaction

>NewUser

>TransactionHistory

