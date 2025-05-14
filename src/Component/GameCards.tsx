import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./platformIcon";

interface Props {
  game: Game;
}
const GameCards = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <PlatformIcon platforms={game.platforms.map((p) => p.platform)} />
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCards;
