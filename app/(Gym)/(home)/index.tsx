import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { HomeHeader } from "@/components/HomeHeader";
import { Group } from "@/components/Group";
import { useState } from "react";
import { ExerciseCard } from "@/components/ExerciseCard";
export default function Home() {
  const [groups, setGroups] = useState([
    "Costas",
    "Ombros",
    "Triceps",
    "Pernas",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terra",
    "Puxada frontal1",
    "Puxada frontal2",
  ]);
  return (
    <VStack flex={1} background={"gray.700"}>
      <HomeHeader />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={groups}
        keyExtractor={(item) => item}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
      />
      <VStack flex={1} px={8}>
        <HStack justifyContent={"space-between"} mb={8}>
          <Heading color={"gray.200"} fontSize={"md"}>
            Exercicios
          </Heading>
          <Text color={"gray.200"} fontSize={"sm"}>
            {exercises.length}
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard title={item} />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 10,
          }}
        />
      </VStack>
    </VStack>
  );
}
