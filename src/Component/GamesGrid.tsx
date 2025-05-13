import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const GamesGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {games.map((game) => (
          <GameCards game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
