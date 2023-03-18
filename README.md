# My Health

Front-end do aplicativo My Health, desenvolvido na disciplina Engenharia de Software II, no período 2022.2, sob a orientação da professora Adicineia.

## Contribuindo

1. Clique em "Fork" para criar um fork do repositório.
2. Clone o fork do projeto em sua máquina.
3. Crie uma nova branch cujo nome descreva as modificações que fará, exemplo: `git checkout -b refatorar-componente-tal`
4. Faça suas alterações e commite-as no repositório local.
5. Pushe as alterações para o repositório remoto — `git push origin HEAD`
6. Abra um pull request do seu fork para este repositório.

## Configuração

Você precisará ter o [Git](https://git-scm.com/) e o [Node.js](https://nodejs.org/en) instalados.

1. Instale as dependências com `npm i`.
2. Execute o projeto com `npx expo start`
3. Digite `w Enter` para executar o servidor web. Você poderá visualizar o app em http://localhost:19006.

## Recomendações

A seguir, algumas recomendações de estilo, a fim de manter a integridade conceitual do projeto.

### Commits

Procure escrever as mensagens de commit iniciando com letra maiúscula e com um verbo no infinitivo.

Ou seja, algo como:

- "Criar tela de..."
- "Refatorar..."
- "Adicionar..."
- "Corrigir bug no..."

E **não** algo como:

- "corrigir..." -> começa com letra minúscula
- "fix: alguma coisa..." -> não usaremos conventional commits!

Se quiser fazer um commit intermediário ou não souber o que escrever na mensagem de commit, use a mensagem "WIP" (work in progress). Use com parcimônia.

### Nomeação

Procure nomear os símbolos (variáveis, constantes, funções, classes) em inglês. Quanto ao casing:

- Use `PascalCamelCase` para classes, tipos, enumerações e componentes React Native.
- Use `camelCase` para variáveis, constantes e funções.

Procure também nomear os arquivos com o mesmo nome do que está sendo exportado por eles.

### Estrutura de pastas

Os módulos do My Health estão abaixo de `modules/`. Código genérico que possa ser utilizado em mais de um módulo fica em `shared/`.

As pastas de `modules/` têm a seguinte estrutura:

- `components/`: componentes que compõem as páginas. Cards, botões, tabelas, campos de entrada, etc.
- `models/`: classes e tipos que modelam os dados do domínio.
- `pages/`: subpáginas do módulo.
- `services/`: código com lógica complexa, que faz gerenciamento de estado ou se comunica com serviços externos.
- `utils/`: funções utilitárias com escopo limitado. Funções de formatação de texto, por exemplo.

`shared/` tem uma estrutura similar. Até então, a única diferença é que ele tem uma pasta `ui/` que agrega `components/` e estilos/cores globais.

### Estilização

Procure estilizar o nó raiz de cada página usando `globalStyles.defaultContainer`, para que as páginas tenham um recuo padrão.

Procure utilizar múltiplos de 8 para definir margens e recuos (padding). Isso faz com que a UI pareça mais consistente. Caso precise de uma granularidade maior, use múltiplos de 4.

Evite usar strings literais para estilizar cores - prefira definí-las no arquivo `colors.ts`, tal que elas possam ser mais facilmente reutilizadas ao longo do projeto.
