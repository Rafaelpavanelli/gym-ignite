import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import Logo from "@/assets/logo.svg";
import BackgroundImg from "@/assets/background.png";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import Entypo from "@expo/vector-icons/Entypo";

import { useForm, Controller} from "react-hook-form";

import { useState } from "react";

import { Pressable } from "react-native";

import { router } from "expo-router";

type FormDataProps = {
  name: string,
  email: string,
  password: string,
  password_confirm: string
}

export default function Sigup() {
  const [showPassword, setShowPassword] = useState(true);


  const { control,handleSubmit,formState: {errors} } = useForm<FormDataProps>();

  function handleSignup({name,email,password,password_confirm}:FormDataProps) {
    return console.log(name);
  }
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <VStack flex={1} bg={"gray.700"} px="10">
        <Image
          source={BackgroundImg}
          alt="background image"
          resizeMode="contain"
          position={"absolute"}
        />
        <Center my={24}>
          <Logo />
          <Text color={"gray.100"}>Treine sua mente e o seu corpo</Text>
        </Center>
        <Center>
          <Heading
            color={"gray.100"}
            fontSize="xl"
            mb={6}
            fontFamily={"heading"}
          >
            Crie sua conta
          </Heading>
          <Controller 
          control={control} 
          name="name"
          rules={{
            required: 'Informe o nome'
          }}
          render={({
            field:{onChange}
          })=>(
            <Input placeholder="Nome" onChangeText={onChange} />
          )}
          />
          <Controller 
          control={control} 
          name="email"
          render={({
            field:{onChange}
          })=>(
            <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={onChange}
          />
          )}
          />
          <Controller 
          control={control} 
          name="password"
          render={({
            field:{onChange}
          })=>(
            <Input
            placeholder="Senha"
            secureTextEntry={showPassword}
            onChangeText={onChange}
            rightElement={
              <Pressable
                style={{
                  padding: 10,
                }}
                onPress={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <Entypo name="eye" color={"white"} size={20} />
                ) : (
                  <Entypo name="eye-with-line" color={"white"} size={20} />
                )}
              </Pressable>
            }
          />
          )}
          />
          
       
          <Controller 
          control={control} 
          name="password_confirm"
          render={({
            field:{onChange}
          })=>(
            <Input
            placeholder="Confirme a senha"
            secureTextEntry={showPassword}
            onChangeText={onChange}
            onSubmitEditing={handleSubmit(handleSignup)}
            returnKeyType="send"
            rightElement={
              <Pressable
                style={{
                  padding: 10,
                }}
                onPress={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <Entypo name="eye" color={"white"} size={20} />
                ) : (
                  <Entypo name="eye-with-line" color={"white"} size={20} />
                )}
              </Pressable>
            }
          />
          )}
          />
          
       
          
        
          <Button title="Criar e acessar" onPress={handleSubmit(handleSignup) } />

          <Button
            title="Já tenho conta"
            variant={"outline"}
            mt={24}
            onPress={() => router.back()}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
