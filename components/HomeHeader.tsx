import { HStack, Heading, Icon, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

import { MaterialIcons } from "@expo/vector-icons";
import { Touchable, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
export function HomeHeader() {
  return (
    <HStack bg="gray.500" pt={16} pb={5} px={8} alignItems={"center"}>
      <UserPhoto
        size={16}
        source={{ uri: "https://github.com/RafaelPavanelli.png" }}
        alt="image perfil"
        mr={4}
      />
      <VStack flex={1}>
        <Text color={"gray.100"} fontSize={"md"}>
          olá,
        </Text>
        <Heading color={"gray.100"} fontSize={"md"}>
          Rodrigo
        </Heading>
      </VStack>
    
      <TouchableOpacity onPress={()=>router.navigate('/')}>
        <Icon as={MaterialIcons} name="logout" color={"gray.200"} />
      </TouchableOpacity>
  

    </HStack>
  );
}
