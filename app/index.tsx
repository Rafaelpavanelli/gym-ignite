import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { Router, router } from "expo-router";

import Logo from "@/assets/logo.svg";
import BackgroundImg from "@/assets/background.png";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import {Entypo} from "@expo/vector-icons";

import { useState } from "react";
import { Pressable } from "react-native";
export default function Sigin() {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <ScrollView contentContainerStyle={{
      flexGrow: 1
    }}>
      <VStack flex={1} bg={"gray.700"} px="10">
        <Image
          source={BackgroundImg}
          alt="background image"
          resizeMode="contain"
          position={"absolute"}
        />
        <Center my={24}>
          <Logo />
          <Text color={'gray.100'} fontSize={'sm'}>Treine sua mente e o seu corpo</Text>
        </Center>
        <Center>
          <Heading
            color={"gray.100"}
            fontSize="xl"
            mb={6}
            fontFamily={"heading"}
          >
            Acesse sua conta
          </Heading>
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
          <Button onPress={()=>router.push('/(home)/home')} title="Acessar" />
        </Center>
        <Center marginTop={24}>
          <Text color={"gray.100"} fontSize={"sm"} mb={3} fontFamily={"body"}>
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant={"outline"} onPress={()=>router.push('/Signup')}/>
        </Center>
      </VStack>
    </ScrollView>
  );
}
