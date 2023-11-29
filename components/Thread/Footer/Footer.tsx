import { Text } from "../../Themed";

type TFooterProps = {
  replies: number;
  likes: number;
};

export function Footer({ replies, likes }: TFooterProps): JSX.Element {
  return (
    <Text style={{ color: "gray" }}>
      {replies} replies • {likes} likes
    </Text>
  );
}
