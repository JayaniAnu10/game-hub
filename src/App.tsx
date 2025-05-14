import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Component/NavBar";
import GamesGrid from "./Component/GamesGrid";
import GenreList from "./Component/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav  nav" "aside  main"`, //1024
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
