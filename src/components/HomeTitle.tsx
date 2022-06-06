import bgLight from "assets/images/title-bg.svg";
import bgDark from "assets/images/title-bg-light.svg";
import {
  Box,
  Flex,
  Stack,
  VStack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import TextColorModeVal from "utils/TextColorModeVal";
import styles from "assets/css/common.module.css";
import EmAvatar from "./EmAvatar";
import MotionDiv from "./MotionDiv";

export default function HomeTitle() {
  const titleBg = useColorModeValue(bgDark, bgLight);
  return (
    <Flex
      pt={20}
      pb={20}
      minH="100vh"
      mb={{ base: 4, md: 40 }}
      backgroundImage={titleBg}
    >
      <VStack px={4} w="100%" justify="center">
        <MotionDiv y={-10}>
          <Stack
            mb={20}
            w="100%"
            maxW="4xl"
            align={{ base: "left", md: "center" }}
            direction={{ base: "column-reverse", md: "row" }}
          >
            <Box mr={{ base: "inherit", lg: 2 }}>
              <Heading as="h2" size="2xl">
                Emigdio Torres
                <span className={styles["text-blinking"]}>_</span>
              </Heading>
              <Heading fontWeight={600} size="lg" mb={4}>
                Software Engineer
              </Heading>
              <Button
                as="a"
                size="md"
                target="_blank"
                colorScheme="gray"
                borderRadius="full"
                aria-label="Github"
                leftIcon={<FaGithub />}
                rel="noopener noreferrer"
                href="https://github.com/emigdio821/"
              >
                GitHub
              </Button>
            </Box>
            <EmAvatar />
          </Stack>
          <Box maxW="4xl">
            <Heading as="h2" size={{ base: "lg" }}>
              Hi there, I&prime;m a Software Engineer, mainly focused on
              front-end development. Currently, I&prime;m contributing to{" "}
              <Button
                as="a"
                fontSize="lg"
                variant="link"
                target="_blank"
                textUnderlineOffset={2}
                rel="noopener noreferrer"
                textDecoration="underline"
                color={TextColorModeVal()}
                href="https://www.wizeline.com/"
              >
                <Heading as="h2" size={{ base: "lg" }}>
                  Wizeline
                </Heading>
              </Button>{" "}
              projects as a Software Engineer.
            </Heading>
          </Box>
        </MotionDiv>
      </VStack>
    </Flex>
  );
}
