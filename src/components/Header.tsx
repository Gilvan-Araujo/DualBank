import React from "react";

import { Search2Icon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import bell from "../assets/bell.svg";
import calendar from "../assets/calendar.svg";
import chat from "../assets/chat.svg";
import copy from "../assets/copy.svg";
import logo from "../assets/logo.svg";
import { AccountsList } from "./AccountList";
import { ToggleValue } from "./ToggleValue";

export function Header() {
  return (
    <Flex
      as="div"
      w="full"
      h="71px"
      bgColor="white"
      display="flex"
      alignItems="center"
      position="relative"
    >
      <Image
        src={logo}
        alt="Logo Dualbank"
        ml="14px"
        borderRight="1px solid #e5e4e2"
        pr="6px"
        mr="16px"
      />
      <Flex as="div" mr="24px" direction="column">
        <AccountsList />
        <Flex as="div" alignItems="center">
          <Tooltip
            label="Copiar"
            aria-label="Copiar agência"
            placement="top"
            bg="white"
            color="blue.800"
            hasArrow
          >
            <Text as="span" variant="header">
              Ag. 00005-1
            </Text>
          </Tooltip>
          <Tooltip
            label="Copiar"
            aria-label="Copiar conta"
            placement="top"
            hasArrow
            bg="white"
            color="blue.800"
          >
            <Text as="span" variant="header">
              C.C. 00000000000000000020-1
            </Text>
          </Tooltip>
          <Tooltip
            label="Copiar tudo"
            aria-label="Copiar tudo"
            placement="top"
            hasArrow
            bg="white"
            color="blue.800"
          >
            <Text as="span" variant="header">
              <Image src={copy} alt="Copiar tudo" />
            </Text>
          </Tooltip>
        </Flex>
      </Flex>
      <ToggleValue title="Saldo" value="R$40.000,00" />
      <HStack alignItems="center" ml="auto" spacing="15px" mr="20px">
        <InputGroup w="160px" size="sm">
          <Input placeholder="Pesquisar" focusBorderColor="green.grey" />
          {/* eslint-disable-next-line react/no-children-prop */}
          <InputRightElement children={<Search2Icon />} />
        </InputGroup>
        <Button bgImage={chat} variant="header" />
        <Button bgImage={calendar} variant="header" />
        <Button bgImage={bell} variant="header" />
        <Avatar
          name="Gilvan Araújo"
          cursor="pointer"
          border="1px solid #172765"
          mr="20px"
          w="50px"
          h="50px"
          borderRadius="50%"
          src="https://avatars.githubusercontent.com/u/45008443?v=4"
          alt="Usuário"
        />
      </HStack>
    </Flex>
  );
}

export default Header;
