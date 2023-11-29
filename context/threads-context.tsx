import React, { useEffect, useState } from "react";

import { generateThreads } from "../utils/generate-mock-data";

import { IThread } from "../types/threads";

export const ThreadsContext = React.createContext<IThread[]>([]);

export const ThreadsProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [threads, setThreads] = useState<IThread[]>([]);

  useEffect(() => {
    setThreads(generateThreads());
  }, []);

  return (
    <ThreadsContext.Provider value={threads}>
      {children}
    </ThreadsContext.Provider>
  );
};
