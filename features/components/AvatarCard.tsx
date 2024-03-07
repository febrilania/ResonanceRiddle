import {
  Avatar,
  Card,
  Center,
  HStack,
  Heading,
  VStack,
} from "@gluestack-ui/themed";

import { Image } from "react-native";
import dataDummy from "../../mocks/data.json";
export default function AvatarCard() {
  return (
    <>
      <HStack flexWrap="wrap" justifyContent="center">
        {dataDummy.map(
          (
            item // Corrected: added parentheses around the JSX
          ) => (
            <Card
              key={item.id}
              size="sm"
              variant="elevated"
              m="$3"
              pt={20}
              borderColor="black"
              borderWidth={2}
            >
              <VStack>
                <Center gap={20}>
                  <Avatar
                    borderColor="black"
                    borderWidth={1}
                    bgColor="$black"
                    size="lg"
                    borderRadius="$full"
                  >
                    <Image
                      className="h-16 w-16 border border-black border-spacing-0 rounded-full"
                      source={{ uri: item.avatar }}
                    />
                  </Avatar>
                  <HStack gap={5}>
                    <Image
                      className="w-6 h-6"
                      source={require("../../assets/diamond.png")}
                    />
                    <Heading size="md">{item.diamond}</Heading>
                  </HStack>
                </Center>
              </VStack>
            </Card>
          )
        )}
      </HStack>
    </>
  );
}
