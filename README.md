## App Dá Hora Filmes

Aplicativo React Native que permite a busca por filmes usando a API TMDB (The MovieDB Database) e a seleção de filmes favoritos usando armazenamento offline/local no próprio dispositivo.

## branch main

Layout/Wireframe básico com as principais Views da tela inicial.

Componentes usados: View, SafeAreaView, StyleSheet, Text, Button.

Foram criados diversos objetos de estilização usando recursos Flex para layout.

## branch 01-estilizacao-app

Foram criados mais objetivos para estilização de cada View na tela inicial do App.

Importação de fonte externa usando a lib **expo-fonts** e o hook **useFonts**.

Instalação: **npm i expo-font**

O arquivo de fonte foi colocado em **assets/fonts**.

Importação de arquivo de imagem (logo) usando **import** tradicional. O arquivo de fonte foi colocado em **assets/fonts.**

## branch 02-estilizacao-app-customizados

Substituição do **Button** pelo **Pressable** (componente genérico pressionável altamente customizável).

Estilização dos novos "botões" (Pressables).

Instalação da lib **@expo/vector-icons** para componentes com ícones: **npm i @expo/vector-icons**

Referências:

`https://docs.expo.dev/guides/icons/`

`https://icons.expo.fyi/`

## branch 03-componentes-basicos

Criação dos componentes Home, FormBusca, Favoritos, Sobre e Privacidade (armazenados na pasta **src/screens**).

Readequação dos recursos (imagem, fonte, estilos) entre App e Home.

Adição de componente **StatusBar** do **react-native** no App. Obs.: Não use o StatusBar do expo.

Uso do componente **ScrollView** em Privacidade para suporte a rolagem de tela para conteúdos extensos.

## branch 04-recursos-de-navegação

Para gerenciar a navegação entre telas do nosso app, utilizamos um conjunto de diversas libs conhecidas como React Navigation.

Site oficial e de documentação: `https://reactnavigation.org/docs/getting-started/`

Para nosso app, é necessário instalar:

**npm install @react-navigation/native**

**npx expo install react-native-screens react-native-safe-area-context**

**npm install @react-navigation/native-stack**

No **App.js** adicionar os imports:

**import { NavigationContainer } from "@react-navigation/native";**

**import { createNativeStackNavigator } from "@react-navigation/native-stack";**

Também no **App.js** fazemos a programação necessária para uso do **NavigationContainer**, **createNativeStackNavigator** e **Screen** das telas/componentes do nosso app.

Por fim, cada botão (Pressable) existente em **Home** cujo objetivo é navegar para uma tela, deve ter sua prop **onPress** configurada para isso. **Atenção**: não esqueça de passar a prop **{navigation}** para o componente **Home**.

## branch 05-exercicio-FormBusca

**FormBusca.js**: adicionamos na função buscarFilmes a chamada `navigation.navigate("Resultados", { filme });` e removemos o `Alert.alert("Você procurou por: ", filme);` usado na branch 05.

_Obs.:_ não se esqueça de adicionar a prop `{navigation}` na const do component `FormBusca`.

**Resultados.js**: criamos este novo componente que funcionará como uma tela de apresentação dos resultados da busca de filmes.

Adicionamos também a prop `{route}` e através dela acessamos o `filme` que foi digitado em `FormBusca`.

**App.js**: adicionamos a nova tela para navegação:
`<Stack.Screen component={Resultados} name="Resultados" />`

### API

Instalação da lib axios: `npm install axios`

**services/api.js**: programos o `import` do axios e url base da API.

**Resultados.js**:

- programamos o state de resultados e o acesso à API **TMDB** usando recursos do axios.
- programamos um `map` básico para testar a exibição dos resultados.

## branch 07-melhorias-na-busca-e-resultados

- Remoção de comentários
- Programação do componente `Loading` usando recursos nativos do `ActivityIndicator`
- Uso de renderização condicional com operador `&&`
- Em `Resultados`, programação para carregamento da imagem do filme

## branch 08-FlatList-e-componentes-adicionais

- Em `Resultados`, aplicação do componente nativo `FlatList` para carregamento dos filmes

`FlatList` é semelhante ao `ScrollView`, no entanto, tem uma perfomance melhor para carregamento de dados cujo volume é grande, variável e vindos de fontes externas (APIs).

- Principais `props` do `FlatList`:
  - data: fonte de dados (no nosso app, é o array `resultados`)
  - renderItem: função que retorna o componente personalizado com os dados (`item`) existentes em `resultados`
  - keyExtractor: função que extrai dos dados (`item`) um valor que servirá como `key` para cada registro (em nosso app, `id`)
  - [opcional] ItemSeparatorComponent: aponta para um componente personalizado responsável por servir como um separador de itens (em nosso app, o item é cada filme)
  - [opcional] ListEmptyComponent: aponta para um componente personalizado responsável por exibir uma mensagem para o caso de não existir itens (ou seja, resultados sem filmes)
