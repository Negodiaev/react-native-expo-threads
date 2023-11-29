import { Feather, MaterialIcons } from "@expo/vector-icons";

import { timeAgo } from "../../../utils/time-ago";

import { View, Text } from "../../Themed";

type THeadingProps = {
  name: string;
  createdAt: string;
  verified: boolean;
};

export function Heading({
  name,
  createdAt,
  verified,
}: THeadingProps): JSX.Element {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: "transparent",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          backgroundColor: "transparent",
        }}
      >
        <Text style={{ fontWeight: "500" }}>{name}</Text>
        {verified && (
          <MaterialIcons name="verified" size={14} color="#60a5fa" />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          backgroundColor: "transparent",
        }}
      >
        <Text style={{ color: "gray" }}>{timeAgo(createdAt)}</Text>
        <Feather name="more-horizontal" size={14} color="gray" />
      </View>
    </View>
  );
}
