# My Health

Front-end do aplicativo My Health, desenvolvido na disciplina Engenharia de Software II, no período 2022.2, sob a orientação da professora Adicineia.

## Contribuindo

1. Clique em "Fork" para criar um fork do repositório.
2. Clone o fork do projeto em sua máquina.
3. Crie uma nova branch cujo nome descreva as modificações que fará, exemplo: `git checkout -b refatorar-componente-tal`
4. Faça suas alterações e commite-as no repositório local.
5. Pushe as alterações para o repositório remoto — `git push origin HEAD`
6. Abra um pull request do seu fork para este repositório.

### Baixando mudanças do repositório principal para o seu repositório local

Digamos que novos commits foram adicionados à branch `master` do repositório principal, tal que seu repositório local ficou desatualizado. Para atualizá-lo, siga estes passos:

Caso ainda não tenha o feito, adicione o repositório *principal* (não o seu fork) à lista de origens, com o nome `upstream`:
```
git remote add upstream https://github.com/ajsaraujo/my-health-app
```

Depois, puxe as mudanças do repositório upstream usando o comando fetch:
```
git fetch upstream
```

Finalmente, mude para a branch master e mescle-a à master que você acabou de baixar do upstream.
```
git checkout master
git merge upstream/master
```

Pronto, agora sua branch master está atualizada em relação à do repositório principal. 

Para mais informações, referencie esta thread: [How do I update or sync a forked repository on GitHub?](https://stackoverflow.com/a/19506355/12044155)

## Configuração

Você precisará ter o [Git](https://git-scm.com/) e o [Node.js](https://nodejs.org/en) instalados.

1. Instale as dependências com `npm i`.
2. Execute o projeto no seu navegador com `npm run web`.

## Adicionando novas páginas ao app

Para adicionar novas páginas/rotas ao app, você deve seguir estes passos:

Primeiro, adicione a rota em `RouteParams`, especificando o tipo de input que ela recebe. Caso não seja necessário input, use o tipo `NO_PARAMS`.

```diff
export type RouteParams = {
   // Rotas existentes...
+  MinhaNovaRota: TipoInput
}
```

Agora, na definição do seu componente, você deve tipar as props de acordo com o nome da rota que você colocou em `RouteParams`:

```tsx
type ComponentProps = NativeStackScreenProps<RouteParams, 'MinhaNovaRota'>

export default function MeuNovoComponent(props: ComponentProps) {}
```

Finalmente, adicione a tela em `App.tsx`:

```diff
  {*/ Telas do seu módulos */}
+ <Stack.Screen name="Nova tela" component={MeuNovoComponent}></Stack.Screen>
```

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

Quando abrir um Merge Request, se ele tiver muitos commits ou o histórico estiver desorganizado, marque a opção "Squash commits" para condensar todos os commits num só após a mesclagem. Isso facilita a leitura do histórico.

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

Arquivos de teste devem ser criados imediatamente vizinhos ao arquivo que testam, e com o sufixo `spec`. Por exemplo, se você vai testar o código de um arquivo chamado `sum.ts`, o teste deve ser `sum.spec.ts`.

### Estilização

Procure estilizar o nó raiz de cada página usando `globalStyles.defaultContainer`, para que as páginas tenham um recuo padrão.

Procure utilizar múltiplos de 8 para definir margens e recuos (padding). Isso faz com que a UI pareça mais consistente. Caso precise de uma granularidade maior, use múltiplos de 4.

Evite usar strings literais para estilizar cores - prefira definí-las no arquivo `colors.ts`, tal que elas possam ser mais facilmente reutilizadas ao longo do projeto.
