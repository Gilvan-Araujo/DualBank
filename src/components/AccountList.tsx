import { useCallback, useState } from "react";

import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

import arrowDown from "../assets/arrow-down.svg";
import arrowUp from "../assets/arrow-up.svg";

export function AccountsList() {
  const [active, setActive] = useState(false);

  const toggle = useCallback(() => {
    setActive(!active);
  }, [active]);

  let accountLoop = [1, 2, 3, 4];

  return (
    <Container as="div" position="relative" ml="-16px">
      <Text
        onClick={toggle}
        display="flex"
        alignItems="center"
        bg="white"
        border="none"
        mb="5px"
        _hover={{ cursor: "pointer" }}
        userSelect="none"
      >
        <Text fontSize="16px" mr="13px" color="blue.800">
          Conta Corrente
        </Text>
        <Image
          src={active ? arrowUp : arrowDown}
          alt="Flecha para baixo"
          w="16px"
          h="16px"
        />
      </Text>

      {active && (
        <Flex
          as="div"
          position="absolute"
          w="320px"
          h="240px"
          overflowY="scroll"
          top="100%"
          flexDirection="column"
          bgColor="white"
          p="10px"
          borderRadius="5px"
          zIndex={1}
          boxShadow="2px 2px 4px 2px rgba(0, 0, 0, 0.2)"
        >
          {accountLoop.map((account) => {
            return (
              <>
                <Heading variant="account-type">Conta Corrente</Heading>
                <Text as="span" variant="account-info">
                  <p>Ag. 00005-1</p>
                  <p>C.C. 00000000000000000020-1</p>
                </Text>
                <Heading variant="account-type">Conta Poupança</Heading>
                <Text as="span" variant="account-info">
                  <p>Ag. 00005-1</p>
                  <p>C.C. 01010010001000010000-2</p>
                </Text>
                <Heading variant="account-type">C.C. Ed. Suzano</Heading>
                <Text as="span" variant="account-info">
                  <p>Ag. 00005-1</p>
                  <p>C.C. 000000000000015-1</p>
                </Text>
                <Heading variant="account-type">
                  C.C. Condomínio Guillermo
                </Heading>
                <Text as="span" variant="account-info">
                  <p>Ag. 00005-1</p>
                  <p>C.C. 00000000000000017-1</p>
                </Text>
                <Heading variant="account-type">
                  C.C. Residencial Figma Ômega
                </Heading>
                <Text as="span" variant="account-info">
                  <p>Ag. 00005-1</p>
                  <p>C.C. 0000000000000000019-1</p>
                </Text>
              </>
            );
          })}
        </Flex>
      )}
    </Container>
  );
}
