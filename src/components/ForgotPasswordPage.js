import {
  Anchor,
  Button,
  Center,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [secondsToSendAgain, setSecondsToSendAgain] = useState(0);

  const form = useForm({
    initialValues: {
      emailOrUsername: "",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSecondsToSendAgain(60);
    setInterval(() => {
      setSecondsToSendAgain((secondsToSendAgain) => secondsToSendAgain - 1);
    }, 1000);
  };

  return (
    <Center sx={{ height: "100vh" }}>
      <Paper shadow="xs" p="lg" sx={{ width: 320, maxWidth: "100%" }}>
        <Stack spacing="xs">
          <Title order={1}>Forgot Password</Title>
          <Text>
            We will send you an email or username with the password reset
            instructions.
          </Text>
          <form onSubmit={handleSubmit}>
            <TextInput
              required
              label="Email or username"
              placeholder="johndoe@example.com"
              {...form.getInputProps("emailOrUsername")}
            />
            <Button
              fullWidth
              mt="lg"
              type="submit"
              disabled={secondsToSendAgain > 0}
            >
              {secondsToSendAgain > 0
                ? `Resend in ${secondsToSendAgain}s`
                : "Send Email"}
            </Button>
            <Text mt="lg">
              Alternatively, you can answer some{" "}
              <Anchor
                component={Link}
                to={`/security-questions`}
                size="inherit"
              >
                security questions
              </Anchor>{" "}
              to log in.
            </Text>
          </form>
        </Stack>
      </Paper>
    </Center>
  );
}
