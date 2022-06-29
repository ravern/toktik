import { Center, MantineProvider } from "@mantine/core";
import React from "react";

import LoginForm from "./LoginForm";

export default function App() {
  return (
    <MantineProvider>
      <Center sx={{ height: "100vh" }}>
        <LoginForm />
      </Center>
    </MantineProvider>
  );
}
