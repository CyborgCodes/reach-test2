import { Flex, Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsChatDots } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";

const icons: React.FC = () => {
  return (
    <Flex>
      <>
        <Link href={`/Chats/Messages`}>
          <Flex
            mr={1.5}
            ml={1.5}
            padding={1}
            cursor="pointer"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
          >
            <Icon as={BsChatDots} fontSize={20} />
          </Flex>
        </Link>
        <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={IoNotificationsOutline} fontSize={20} />
        </Flex>
      </>
    </Flex>
  );
};
export default icons;
