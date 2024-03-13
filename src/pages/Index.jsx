import { Box, Flex, IconButton, Input, Stack, Text, Avatar, Spacer, Button, useColorMode, useColorModeValue, VStack, HStack, Icon, Textarea, Divider } from "@chakra-ui/react";
import { FaMoon, FaSun, FaTwitter, FaRegComment, FaRetweet, FaHeart, FaShareAlt } from "react-icons/fa";

const TweetCard = ({ username, handle, content, avatar }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <HStack spacing={3}>
        <Avatar src={avatar} />
        <VStack align="start" spacing={1}>
          <Text fontWeight="bold">{username}</Text>
          <Text color="gray.500">@{handle}</Text>
        </VStack>
      </HStack>
      <Text mt={2}>{content}</Text>
      <HStack mt={2} spacing={4} color="gray.500">
        <Icon as={FaRegComment} />
        <Icon as={FaRetweet} />
        <Icon as={FaHeart} />
        <Icon as={FaShareAlt} />
      </HStack>
    </Box>
  );
};

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex direction="column" align="center" p={8}>
      <Flex justify="space-between" w="full" align="center" mb={4}>
        <Icon as={FaTwitter} w={8} h={8} color="blue.400" />
        <Spacer />
        <IconButton icon={useColorModeValue(<FaMoon />, <FaSun />)} onClick={toggleColorMode} variant="ghost" />
      </Flex>
      <Stack spacing={4} w="full" maxW="md">
        <Box bg={formBackground} p={4} borderRadius="lg">
          <Textarea placeholder="What's happening?" />
          <Button mt={2} colorScheme="twitter" isFullWidth>
            Tweet
          </Button>
        </Box>
        <Divider />
        <VStack spacing={4} align="stretch">
          {/* Example Tweets */}
          <TweetCard username="John Doe" handle="johndoe" content="Just setting up my twttr" avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb258ZW58MHx8fHwxNzEwMzI5Mjc2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <TweetCard username="Jane Smith" handle="janesmith" content="Hello Twitter World!" avatar="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwZXJzb258ZW58MHx8fHwxNzEwMzI5Mjc2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <TweetCard username="Foo Bar" handle="foobar" content="React makes frontend development fun!" avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwZXJzb258ZW58MHx8fHwxNzEwMzI5Mjc2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </VStack>
      </Stack>
    </Flex>
  );
};

export default Index;
