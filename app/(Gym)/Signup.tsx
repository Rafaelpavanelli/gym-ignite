import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import Logo from "@/assets/logo.svg";
import BackgroundImg from "@/assets/background.png";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import Entypo from "@expo/vector-icons/Entypo";

import { useState } from "react";

import { Pressable } from "react-native";

import {  router } from "expo-router";
export default function Sigup() {
  const [showPassword, setShowPassword] = useState(true);
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
          <Input
            placeholder="Nome"
          />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            placeholder="Senha"
            secureTextEntry={showPassword}
            rightElement={
              <Pressable
                style={{
                  padding: 10,
                }}
                onPress={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <Entypo name="eye" color={"gray.100"} size={20} />
                ) : (
                  <Entypo name="eye-with-line" color={"white"} size={20} />
                )}
              </Pressable>
            }
          />
          <Button title="Criar e acessar" />
         
          <Button title="Já tenho conta" variant={"outline"} mt={24}  onPress={()=>router.replace('/')}/>
       
        </Center>
      </VStack>
    </ScrollView>
  );
}
