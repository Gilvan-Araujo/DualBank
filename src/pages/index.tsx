import React, { useCallback, useState } from "react";

import { Button, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";

import arrowDown from "../assets/arrow-down.svg";
import eyeClosed from "../assets/eye-closed.svg";
import eyeOpen from "../assets/eye-open.svg";
import file from "../assets/file.svg";
import printer from "../assets/printer.svg";
import refresh from "../assets/refresh.svg";
import share from "../assets/share.svg";
import shield from "../assets/shield.svg";
import Header from "../components/Header";
import { SideMenu } from "../components/SideMenu";
import { TopMenu } from "../components/TopMenu";

export default function Home() {
  const [balanceVisible, setBalanceVisible] = useState(false);

  const toggleBalanceVisible = useCallback(() => {
    setBalanceVisible(!balanceVisible);
  }, [balanceVisible]);

  return (
    <>
      <Header />
      <Flex as="div">
        <SideMenu />
        <Flex as="div" flex="1" flexDir="column">
          <TopMenu />
          <Flex as="div" alignItems="center" m="20px">
            <HStack spacing="16px">
              <Heading
                as="h2"
                fontFamily="Raleway"
                fontSize="20px"
                fontWeight={600}
              >
                Saldo Bancário
              </Heading>
              <Button variant="main-page" bgImage={printer} />
              <Button variant="main-page" bgImage={file} />
              <Button variant="main-page" bgImage={share} />
            </HStack>
          </Flex>
          <Flex
            as="div"
            w="280px"
            border="1px solid #e5e4e2"
            borderBottom="2px solid #622ee5"
            borderRadius="5px 5px 0 0"
            ml="20px"
            py="5px"
            px="10px"
          >
            <Flex as="div" flexDir="column">
              <Text as="span" fontSize="12px" color="#622ee5" mb="5px">
                Data do Saldo
              </Text>
              <Text as="span">07/12/2020</Text>
            </Flex>
            <Image src={arrowDown} alt="arrow down" ml="auto" w="20px" />
          </Flex>
          <Flex as="div" alignItems="center" my="10px" mx="0" ml="40px">
            <Text as="span">Saldo atualizado às 16:48</Text>
            <Image src={refresh} alt="refresh" ml="10px" cursor="pointer" />
          </Flex>
          <Flex
            w="280px"
            border="1px solid #e5e4e2"
            borderBottom="2px solid #778899"
            borderRadius="5px 5px 0 0"
            ml="20px"
            py="5px"
            px="10px"
          >
            <Image src={shield} cursor="pointer" alt="Escudo" w="24px" />
            <Flex
              flexDir="column"
              justify="center"
              ml="10px"
              mr="auto"
              h="40px"
            >
              <Text as="span" fontSize="16px" mb="5px">
                {balanceVisible ? "Saldo disponível" : "Saldo"}
              </Text>
              {balanceVisible && (
                <Text as="span" color="#69d531">
                  R$ 40.000,00
                </Text>
              )}
            </Flex>
            <Image
              src={balanceVisible ? eyeClosed : eyeOpen}
              cursor="pointer"
              alt="Alternar"
              onClick={toggleBalanceVisible}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
