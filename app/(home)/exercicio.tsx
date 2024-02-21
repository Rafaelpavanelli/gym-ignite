import { Box, HStack, Image, Text, VStack, ScrollView } from "native-base";

import { HeaderExercise } from "@/components/HeaderExercise";

import Series from "@/assets/series.svg";
import Repetitions from "@/assets/repetitions.svg";
import { Button } from "@/components/Button";
export default function Exercise() {
  return (
    <VStack flex={1} background={"gray.700"}>
      <HeaderExercise />
      <ScrollView>
        <VStack p={8}>
          <Image
            source={{
              uri: "https://uploads.metropoles.com/wp-content/uploads/2021/10/11094556/exercicios-fisicos-academia.jpg",
            }}
            alt="Exercicio"
            w="full"
            resizeMode="cover"
            h={80}
            rounded={"lg"}
          />
          <Box bg={"gray.600"} rounded={"md"} pb={4} px={4}>
            <HStack
              alignItems={"center"}
              justifyContent={"space-around"}
              mb={6}
              mt={5}
            >
              <HStack>
                <Series />
                <Text color={"gray.200"} marginLeft={2}>
                  3 series
                </Text>
              </HStack>
              <HStack>
                <Repetitions />
                <Text color={"gray.200"} marginLeft={2}>
                  3 series
                </Text>
              </HStack>
            </HStack>
            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
