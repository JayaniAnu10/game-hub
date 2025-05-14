import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaXbox,
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiPlaystation4, SiPlaystationvita } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { RiXboxLine } from "react-icons/ri";
import { LiaXbox } from "react-icons/lia";
import { TbPlaystationCircle } from "react-icons/tb";

interface Props {
  platforms: Platform[];
}

const PlatformIcon = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    macos: FaApple,
    android: FaAndroid,
    xbox360: FaXbox,
    "xbox-one": RiXboxLine,
    "xbox-old": FaXbox,
    playstation4: SiPlaystation4,
    playstation3: FaPlaystation,
    playstation5: TbPlaystationCircle,
    ios: MdPhoneIphone,
    linux: FaLinux,
    web: BsGlobe,
    "xbox-series-x": LiaXbox,
    "ps-vita": SiPlaystationvita,
    "nintendo-switch": SiNintendo,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIcon;
