import {
  Anchor,
  Button,
  Group,
  Paper,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";

export default function LoginForm() {
  const form = useForm({
    initialValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const handleForgotPasswordClick = () => {
    console.log("works for me");
  };

  return (
    <Paper shadow="xs" p="lg">
      <form>
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
          <Anchor sx={{ fontSize: 12 }} onClick={handleForgotPasswordClick}>
            Forgot your password?
          </Anchor>
        </Group>
        <Button fullWidth mt="lg" type="submit">
          Login
        </Button>
      </form>
    </Paper>
  );
}
