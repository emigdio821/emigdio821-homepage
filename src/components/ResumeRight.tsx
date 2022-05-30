import {
  Box,
  Text,
  Grid,
  Icon,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaDrum,
  FaHtml5,
  FaReact,
  FaSteam,
  FaLaptop,
  FaGitAlt,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaKeyboard,
  FaHeadphonesAlt,
} from "react-icons/fa";
import { MotionDiv } from "./MotionDiv";
import { SemiBoldText } from "./SemiBoldText";
import styles from "assets/css/common.module.css";

export const ResumeRight = () => {
  const textColorMode = useColorModeValue("#333", "#f0efef");
  return (
    <>
      <Box p={4} bg={useColorModeValue("#fafafa", "#212121")}>
        <MotionDiv delay={0.1}>
          <Box mb={6}>
            <Heading
              mb={3}
              as="h4"
              size={"md"}
              letterSpacing={3}
              color={textColorMode}
            >
              Experience
            </Heading>
            <Flex mb={3}>
              <Box pr={4}>
                <Box
                  w={3}
                  h={3}
                  mt={1}
                  bg={textColorMode}
                  borderRadius="full"
                />
                <Box
                  w={"2px"}
                  h={"110%"}
                  opacity={0.6}
                  bg={textColorMode}
                  transform="translate(5px, 0)"
                />
              </Box>
              <Box color={textColorMode} textAlign="left">
                <Heading as="h5" size={"sm"} fontWeight={600}>
                  Web Developer
                </Heading>
                <Text fontSize="sm">
                  2014 - 2017 |{" "}
                  <SemiBoldText>TATA Consultancy Services</SemiBoldText>
                </Text>
                <Text fontSize="sm">
                  Frontend work, using JavaScript under a framework called:
                  ExtJS. Development of banking web apps for Morgan Stanley
                  bank.
                </Text>
              </Box>
            </Flex>
            <Flex mb={3}>
              <Box pr={4}>
                <Box
                  w={3}
                  h={3}
                  mt={1}
                  bg={textColorMode}
                  borderRadius="full"
                />
                <Box
                  w={"2px"}
                  h={"110%"}
                  opacity={0.6}
                  bg={textColorMode}
                  transform="translate(5px, 0)"
                />
              </Box>
              <Box color={textColorMode} textAlign="left">
                <Heading as="h5" size={"sm"} fontWeight={600}>
                  Software Engineer
                </Heading>
                <Text fontSize="sm">
                  2017 - 2019 |{" "}
                  <SemiBoldText>Advanced Methods Co. (Amco)</SemiBoldText>
                </Text>
                <Text fontSize="sm">
                  Frontend work, using SASS, JQuery, Bootstrap. Sometimes worked
                  on Backend, using Ruby on Rails. Development of Payments
                  portal for an education platform.
                </Text>
              </Box>
            </Flex>
            <Flex mb={3}>
              <Box pr={4}>
                <Box
                  w={3}
                  h={3}
                  mt={1}
                  bg={textColorMode}
                  borderRadius="full"
                />
                <Box
                  w={"2px"}
                  h={"110%"}
                  opacity={0.6}
                  bg={textColorMode}
                  transform="translate(5px, 0)"
                />
              </Box>
              <Box color={textColorMode} textAlign="left">
                <Heading as="h5" size={"sm"} fontWeight={600}>
                  Software Engineer
                </Heading>
                <Text fontSize="sm">
                  2019- 2021 | <SemiBoldText>HCL Technologies</SemiBoldText>
                </Text>
                <Text fontSize="sm">
                  Frontend work, using IBM JS Dojo toolkit, migrating to
                  ReactJS, Redux and MaterialUI. Development of an application
                  builder.
                </Text>
              </Box>
            </Flex>
            <Flex>
              <Box pr={4}>
                <Box
                  w={3}
                  h={3}
                  mt={1}
                  bg={textColorMode}
                  borderRadius="full"
                />
              </Box>
              <Box color={textColorMode} textAlign="left">
                <Heading as="h5" size={"sm"} fontWeight={600}>
                  Software Engineer
                </Heading>
                <Text fontSize="sm">
                  Present | <SemiBoldText>Wizeline</SemiBoldText>
                </Text>
                <Text fontSize="sm">Currently working with React.</Text>
              </Box>
            </Flex>
          </Box>
        </MotionDiv>
        <MotionDiv delay={0.2}>
          <Box mb={6}>
            <Heading
              as="h4"
              mb={3}
              size={"md"}
              letterSpacing={3}
              color={textColorMode}
            >
              Skills
            </Heading>
            <Grid
              columnGap={6}
              textAlign="center"
              color={textColorMode}
              className={styles["skills-grid"]}
              templateColumns="repeat(6, max-content)"
            >
              <Box>
                <Icon as={FaCss3Alt} fontSize="2xl" />
                <Text fontSize="sm">CSS</Text>
              </Box>
              <Box>
                <Icon as={FaHtml5} fontSize="2xl" />
                <Text fontSize="sm">HTML</Text>
              </Box>
              <Box>
                <Icon as={FaJsSquare} fontSize="2xl" />
                <Text fontSize="sm">JS</Text>
              </Box>
              <Box>
                <Icon as={FaGitAlt} fontSize="2xl" />
                <Text fontSize="sm">Git</Text>
              </Box>
              <Box>
                <Icon as={FaReact} fontSize="2xl" />
                <Text fontSize="sm">React</Text>
              </Box>
              <Box>
                <Icon as={FaNodeJs} fontSize="2xl" />
                <Text fontSize="sm">Node</Text>
              </Box>
            </Grid>
          </Box>
        </MotionDiv>

        <MotionDiv delay={0.3}>
          <Box mb={6}>
            <Heading
              mb={3}
              as="h4"
              size={"md"}
              letterSpacing={3}
              color={textColorMode}
            >
              Hobbies & Interests
            </Heading>
            <Grid
              columnGap={6}
              textAlign="center"
              color={textColorMode}
              className={styles["hobbies-grid"]}
              templateColumns="repeat(5, max-content)"
            >
              <Box>
                <Icon as={FaDrum} fontSize="2xl" />
                <Text fontSize="sm">Drums</Text>
              </Box>
              <Box>
                <Icon as={FaHeadphonesAlt} fontSize="2xl" />
                <Text fontSize="sm">Music</Text>
              </Box>
              <Box>
                <Icon as={FaSteam} fontSize="2xl" />
                <Text fontSize="sm">Games</Text>
              </Box>
              <Box>
                <Icon as={FaLaptop} fontSize="2xl" />
                <Text fontSize="sm">Tech</Text>
              </Box>
              <Box>
                <Icon as={FaKeyboard} fontSize="2xl" />
                <Text fontSize="sm">KBoards</Text>
              </Box>
            </Grid>
          </Box>
        </MotionDiv>
      </Box>
    </>
  );
};
