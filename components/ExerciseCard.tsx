import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { HStack, Heading, Image, Text, VStack,Icon } from "native-base";

import { Entypo } from "@expo/vector-icons";
type Props = TouchableOpacityProps & {
  title:string
};

export function ExerciseCard({ title,...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg={'gray.500'} alignItems={'center'} p={2} pr={4} rounded={'md'} mb={3}>
        <Image
          source={{
            uri: "https://uploads.metropoles.com/wp-content/uploads/2021/10/11094556/exercicios-fisicos-academia.jpg",
          }}
          alt="Imagem de exercicio"
          w={16}
          h={16}
          rounded={'md'}
          marginRight={4}
          resizeMode="cover"
        />
        <VStack flex={1}>
            <Heading fontSize={'lg'} color={'white'}>
               {title}
            </Heading>
            <Text fontSize={'sm'} color={'gray.200'} mt={1} numberOfLines={2}>
                Levantar um peso pesadão lorem
            </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color={'gray.300'} size={4}/>
      </HStack>
    </TouchableOpacity>
  );
}
