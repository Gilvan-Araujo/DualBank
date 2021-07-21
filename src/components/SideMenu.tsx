import React from "react";

import { Button, Flex, Image } from "@chakra-ui/react";

import arrowRight from "../assets/arrow-right.svg";
import chartDonut from "../assets/chart-donut.svg";
import chartUpwards from "../assets/chart-upwards.svg";
import creditCard from "../assets/credit-card.svg";
import handshake from "../assets/handshake.svg";
import house from "../assets/house.svg";
import moneyBill from "../assets/money-bill.svg";
import pix from "../assets/pix.svg";
import question from "../assets/question.svg";
import receipt from "../assets/receipt.svg";
import wrench from "../assets/wrench.svg";

export function SideMenu() {
  return (
    <Flex
      as="aside"
      w="44px"
      h="calc(100vh - 71px)"
      flexDir="column"
      alignItems="center"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.2)"
    >
      <Button bgImage={house} alt="Página inicial" variant="sidebar" />
      <Image
        p="10px"
        cursor="pointer"
        src={chartDonut}
        alt="Distribuição"
        bg="linear-gradient(89.96deg, #622EE5 0.06%, #172765 99.94%)"
      />
      <Button variant="sidebar" bgImage={chartUpwards} alt="Gráficos" />
      <Button bgImage={moneyBill} alt="Dinheiro" variant="sidebar" />
      <Button bgImage={handshake} alt="Acordos" variant="sidebar" />
      <Button variant="sidebar" bgImage={pix} alt="Pix" />
      <Button variant="sidebar" bgImage={creditCard} alt="Cartão de crédito" />
      <Button variant="sidebar" bgImage={receipt} alt="Recibos" />
      <Button variant="sidebar" bgImage={wrench} alt="Configurações" />
      <Button variant="sidebar" bgImage={question} alt="Ajuda" />
      <Image
        p="10px"
        cursor="pointer"
        src={arrowRight}
        alt="Alternar menu"
        transform="translateX(20px)"
        bg="linear-gradient(89.96deg, #622EE5 0.06%, #172765 99.94%)"
        py="10px"
        px="15px"
        borderRadius="50%"
      />
    </Flex>
  );
}
