import React from "react";

import { Button, Flex, Heading, Image, Text, Tooltip } from "@chakra-ui/react";

import plusCircle from "../../assets/plus-circle.svg";
import tag from "../../assets/tag.svg";
import { ToggleValue } from "../ToggleValue";
import styles from "./styles.module.scss";

export function TopMenu() {
  return (
    <Flex align="center" h="44px" boxShadow="4px 0px 4px rgba(0, 0, 0, 0.2)">
      <Flex align="center">
        <Flex position="relative" className={styles.dropdown}>
          <Image
            src={tag}
            alt="Categorias"
            cursor="pointer"
            bg="linear-gradient(135deg, #ffffff, #e5e4e2)"
            p="5px"
            borderRadius="50%"
            ml="15px"
          />
          <Flex
            visibility="hidden"
            w="280px"
            pos="absolute"
            top="100%"
            left="20px"
            bg="linear-gradient(to right, #f9f9f9, #e5e4e2)"
            p="20px"
            borderRadius="5px"
            boxShadow="2px 2px 4px 2px rgba(0, 0, 0, 0.25)"
            opacity="1"
            transition="opacity 0.25s"
            flexDir="column"
            zIndex="5"
          >
            <Heading
              as="h3"
              fontFamily="Raleway"
              fontSize="14px"
              fontWeight={600}
              mb="10px"
            >
              Disponibilizado
            </Heading>
            <Flex as="span" mb="20px">
              <Text color="#69d531" mr="5px">
                R$20.000,00
              </Text>{" "}
              do seu saldo
            </Flex>

            <Heading
              as="h3"
              fontFamily="Raleway"
              fontSize="14px"
              fontWeight={600}
              mb="10px"
            >
              Distribuído
            </Heading>
            <Flex as="span" mb="20px">
              <Text color="#69d531" mr="5px">
                R$12.050,00{" "}
              </Text>{" "}
              (60,25%)
            </Flex>

            <Button
              border="none"
              bgColor="#622ee5"
              _hover={{ bgColor: "#622ee5" }}
              color="white"
              py="10px"
              px="20px"
              borderRadius="5px"
              fontSize="12px"
              w="117px"
              h="40px"
            >
              ALTERAR
            </Button>
          </Flex>
        </Flex>
        <Tooltip label="Nova alocação" hasArrow placement="top">
          <Image
            src={plusCircle}
            alt="plus circle"
            cursor="pointer"
            bg="linear-gradient(135deg, #ffffff, #e5e4e2)"
            p="5px"
            borderRadius="50%"
            ml="15px"
          />
        </Tooltip>
      </Flex>

      <Flex align="center" ml="40px">
        <Flex
          as="span"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="36px"
          h="36px"
          borderRadius="50%"
          color="#fff"
          bg="linear-gradient(135deg, #622ee5, #172765)"
        >
          P
        </Flex>
        <ToggleValue title="Principal" value="R$10.000,00" />
      </Flex>

      <Flex align="center" ml="40px">
        <Flex
          as="span"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="36px"
          h="36px"
          borderRadius="50%"
          color="#fff"
          bg="linear-gradient(135deg, #778899, #172765)"
        >
          A
        </Flex>
        <ToggleValue title="Aluguel" value="R$1.600,00" />
      </Flex>

      <Flex align="center" ml="40px">
        <Flex
          as="span"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="36px"
          h="36px"
          borderRadius="50%"
          color="#fff"
          bg="linear-gradient(135deg, #ff354e, #172765)"
        >
          A
        </Flex>
        <ToggleValue title="Alimentação" value="R$450,00" />
      </Flex>
    </Flex>
  );
}
