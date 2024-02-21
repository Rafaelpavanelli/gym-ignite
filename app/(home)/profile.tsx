import { UserPhoto } from "@/components/UserPhoto";
import { Center, Heading, ScrollView, Skeleton, Text, Toast, VStack } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

import * as ImagePicker from 'expo-image-picker';

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

const PHOTO_SIZE = 33;

export default function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const[userPhoto,setUserPhoto] = useState('https://github.com/RafaelPavanelli.png')

  async function handleUserPhotoSelect(){
    setPhotoIsLoading(true);
    try{
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4,4],
        allowsEditing: true,
      });
     if(photoSelected.canceled){

      return Toast.show({
        title: 'Arquivo não selecionado!',
        placement: 'top',
        bgColor: 'red.500'
      })
    
    }

      if(photoSelected.assets[0].uri){
        setUserPhoto(photoSelected.assets[0].uri);
        return Toast.show({
          title: 'Foto atualizada com sucesso!',
          placement: 'top',
          bgColor: 'green.500'
        })

     }

    }catch(e){
      console.log(e);
    }finally{
      setPhotoIsLoading(false)
    }
  }

  return (
    <VStack flex={1} background={"gray.700"}>
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded={"full"}
              startColor={"gray.500"}
              endColor={"gray.400"}
            />
          ) : (
            <UserPhoto
              source={{ uri: userPhoto }}
              alt="Imagem de perfil"
              size={PHOTO_SIZE}
            />
          )}
          <TouchableOpacity onPress={()=> handleUserPhotoSelect()}>
            <Text
              color={"green.500"}
              fontWeight={"bold"}
              fontSize={"md"}
              marginTop={2}
              marginBottom={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input placeholder="Nome" bg={"gray.600"} borderColor={"gray.300"} />
          <Input placeholder="Email" bg={"gray.600"} isDisabled />
        </Center>
        <VStack px={10} mt={12} mb={9}>
            <Heading color={'gray.200'} fontSize={'md'} mb={2}>
              Alterar senha 
            </Heading>
            <Input bg={'gray.600'} placeholder="senha antiga" secureTextEntry/>
            <Input bg={'gray.600'} placeholder="Nova senha" secureTextEntry/>
            <Input bg={'gray.600'} placeholder="Confirme nova senha" secureTextEntry/>
            <Button title="Salvar alterações" mt={4}/>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
