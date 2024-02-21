import { Heading, SectionList,Text,VStack  } from "native-base";
import { HistoryCard } from "@/components/HistoryCard";
import { useState } from "react";
export default function History(){
    const[exercises,setExercises] = useState([
        {
            title: '15.08.22',
            data: ["Braço","Perna","Joelho"]
        },
        {
            title: '27.08.22',
            data: ["Braço","Remada","Frontal"]
        }
    ])
    return(
        <VStack flex={1} background={'gray.700'}>
            <SectionList 
            sections={exercises}
            keyExtractor={item=>item}
            renderItem={({item})=>(
            <HistoryCard />
            )}
            renderSectionHeader={({section})=>(
                <Heading color={'gray.200'} fontSize={'md'} mt={10} mb={6}  >
                    {section.title}
                </Heading>
            )}
            px={8}
            contentContainerStyle={exercises.length === 0 && { flex: 1}}
            ListEmptyComponent={()=>(
                <Text color={'gray.100'} textAlign={'center'}> não há exercicios registrados ainda.{'\n'}
                    Vamos Fazer exercicio hoje?
                </Text>
            )}
            />

        </VStack>
    )
}