import { StyleSheet, useColorScheme } from "react-native";
import { Image } from "expo-image";

import { IReply } from "../../../types/threads";

import { View } from "../../Themed";

type TLeftSideProps = { photo: string; blurhash: string; replies: IReply[] };

export function LeftSide({
  photo,
  blurhash,
  replies,
}: TLeftSideProps): JSX.Element {
  const currentTheme = useColorScheme();
  const borderColor = currentTheme === "light" ? "#00000020" : "#ffffff20";

  return (
    <View
      style={{
        justifyContent: "space-between",
        backgroundColor: "transparent",
      }}
    >
      <Image
        source={photo}
        placeholder={blurhash}
        contentFit="cover"
        transition={200}
        style={styles.image}
      />
      <View
        style={{
          alignSelf: "center",
          flexGrow: 1,
          borderWidth: 1,
          borderColor,
        }}
      />
      <View
        style={{
          alignItems: "center",
          alignSelf: "center",
          gap: 3,
          width: 20,
        }}
      >
        {[1, 2, 3].map((index) => (
          <Image
            source={replies[index - 1]?.author.photo}
            placeholder={blurhash}
            contentFit="cover"
            transition={500}
            style={{ width: index * 9, height: index * 9, borderRadius: 15 }}
            key={index}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: 40, height: 40, borderRadius: 20 },
});
