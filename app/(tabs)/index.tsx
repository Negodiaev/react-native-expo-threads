import {
  Platform,
  NativeModules,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from "react-native";
import React, { useContext, useRef } from "react";
import Lottie from "lottie-react-native";

import { ThreadsContext } from "../../context/threads-context";

import Thread from "../../components/Thread/Thread";

const { StatusBarManager } = NativeModules;

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);
  const threads = useContext(ThreadsContext);

  const currentTheme = useColorScheme();
  const backgroundColor = currentTheme === "dark" ? "#000" : "#fff";

  function handleRefresh(): void {
    animationRef.current?.play();
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: StatusBarManager.HEIGHT }),
          backgroundColor,
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            tintColor="transparent"
            onRefresh={handleRefresh}
          />
        }
      >
        <Lottie
          source={require("../../lottie-animations/threads.json")}
          style={{ alignSelf: "center", width: 90, height: 90 }}
          loop={false}
          autoPlay
          ref={animationRef}
          // onAnimationFinish={() => alert("Animation finished")}
        />
        {threads.map((thread) => (
          <Thread thread={thread} key={thread.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
