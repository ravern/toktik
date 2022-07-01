import { Button, Center, Paper, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";

const QUESTIONS = [
  {
    id: "birthday",
    question: "Enter your birthday.",
    placeholder: "e.g. 1 January 1970",
    answer: new Date(1987, 6, 12),
  },
  {
    id: "firstPet",
    question: "What is the name of your first pet?",
    placeholder: "e.g. Johnny",
    answer: "Sunny",
  },
  {
    id: "childhoodNickname",
    question: "What was your childhood nickname?",
    placeholder: "e.g. Bird",
    answer: "hoozbooz",
  },
];

const formInitialValues = {};
QUESTIONS.forEach((question) => {
  formInitialValues[question.id] = "";
});

export default function SecurityQuestionsPage() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const form = useForm({
    initialValues: formInitialValues,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const question = QUESTIONS[questionIndex];
    if (questionIndex < QUESTIONS.length - 1) {
      if (
        form.values[question.id].toLowerCase().replace(/\s/g, "") ===
        question.answer.toLowerCase().replace(/\s/g, "")
      ) {
        setQuestionIndex(questionIndex + 1);
      } else {
        form.setErrors({ [question.id]: "Wrong answer!" });
      }
    } else {
      console.log("CONFIRM");
    }
  };

  return (
    <Center sx={{ height: "100vh" }}>
      <Paper shadow="xs" p="lg" sx={{ width: 320, maxWidth: "100%" }}>
        <Stack spacing="xs">
          <Text weight="bold">{QUESTIONS[questionIndex].question}</Text>
          <form onSubmit={handleSubmit}>
            <TextInput
              required
              label="Answer"
              placeholder={QUESTIONS[questionIndex].placeholder}
              {...form.getInputProps(QUESTIONS[questionIndex].id)}
            />
            <Button fullWidth mt="lg" type="submit">
              Submit
            </Button>
          </form>
        </Stack>
      </Paper>
    </Center>
  );
}
