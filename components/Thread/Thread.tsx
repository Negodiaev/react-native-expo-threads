import { StyleSheet } from "react-native";
import { Image } from "expo-image";

import { IThread } from "../../types/threads";

import { View, Text } from "../Themed";
import { LeftSide } from "./LeftSide/LeftSide";
import { Heading } from "./Heading/Heading";
import { Icons } from "./Icons/Icons";
import { Footer } from "./Footer/Footer";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

type TThreadProps = {
  thread: IThread;
};

export default function Thread({ thread }: TThreadProps): JSX.Element {
  const {
    author: { name, verified, photo },
    content,
    image,
    createdAt,
    replies,
    repliesCount,
    likesCount,
  } = thread;

  return (
    <View style={styles.container}>
      <LeftSide photo={photo} blurhash={blurhash} replies={replies} />
      <View style={{ gap: 6, flexShrink: 1, backgroundColor: "transparent" }}>
        <Heading name={name} createdAt={createdAt} verified={verified} />
        <Text>{content}</Text>
        {image && (
          <Image
            source={image}
            placeholder={blurhash}
            contentFit="cover"
            transition={200}
            style={{ width: "100%", minHeight: 300, borderRadius: 10 }}
          />
        )}
        <Icons />
        <Footer replies={repliesCount} likes={likesCount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    paddingBottom: 30,
    backgroundColor: "transparent",
  },
});
