import {
  Anchor,
  Box,
  Button,
  Center,
  Group,
  Image,
  Paper,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { Link } from "react-router-dom";

import LogoPNG from "../assets/logo.png";

export default function LoginForm() {
  const form = useForm({
    initialValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Center sx={{ height: "100vh" }}>
      <Paper shadow="xs" p="lg">
        <Group sx={{ justifyContent: "center" }}>
          <Image alt="TokTik logo" src={LogoPNG} width={200} height={60} />
        </Group>
        <Box
          component="form"
          mt="md"
          sx={{ width: 320, maxWidth: "100%" }}
          onSubmit={handleSubmit}
        >
          <TextInput
            required
            label="Email or username"
            placeholder="johndoe@example.com"
            {...form.getInputProps("emailOrUsername")}
          />
          <PasswordInput
            mt="sm"
            required
            label="Password"
            placeholder="hunter2"
            {...form.getInputProps("password")}
          />
          <Group mt="sm">
            <Anchor component={Link} to="/forgot-password">
              <Text size="xs">Forgot your password?</Text>
            </Anchor>
          </Group>
          <Button fullWidth mt="lg" type="submit">
            Login
          </Button>
        </Box>
      </Paper>
    </Center>
  );
}
