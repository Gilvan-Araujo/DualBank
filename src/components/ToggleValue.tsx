import { useCallback, useState } from "react";

import { Flex, Image, Text } from "@chakra-ui/react";

import closedEye from "../assets/eye-closed.svg";
import openEye from "../assets/eye-open.svg";

interface ToggleValueProps {
  title: string;
  value: string;
}

export function ToggleValue({ title, value }: ToggleValueProps) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <Flex as="div" flexDir="column" ml="10px">
      <Flex as="div" alignItems="center" mb="5px">
        <Text as="span" fontSize="12px" mr="14px">
          {title}
        </Text>
        <Image
          alt="Alternar"
          src={visible ? closedEye : openEye}
          onClick={toggleVisibility}
          cursor="pointer"
          w="16px"
          h="16px"
        />
      </Flex>
      {visible ? (
        <Text fontSize="14px" color="#69d531">
          {value}
        </Text>
      ) : (
        <Flex as="div" w="80px" h="12px" bg="#e5e4e2" borderRadius="5px"></Flex>
      )}
    </Flex>
  );
}
