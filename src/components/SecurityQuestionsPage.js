import { Button, Center, Paper, Stack, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { parseDate } from "chrono-node";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const QUESTIONS = [
  {
    id: "birthday",
    question: "Enter your birthday.",
    placeholder: "e.g. 1 January 1970",
    answer: new Date(1987, 5, 12),
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
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const form = useForm({
    initialValues: formInitialValues,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const question = QUESTIONS[questionIndex];
    if (questionIndex < QUESTIONS.length - 1) {
      if (question.id === "birthday") {
        const answer = parseDate(form.values[question.id]);
        if (answer == null) {
          form.setErrors({ [question.id]: "Wrong answer!" });
          return;
        }
        if (
          question.answer.getFullYear() === answer.getFullYear() &&
          question.answer.getMonth() === answer.getMonth() &&
          question.answer.getDate() === answer.getDate()
        ) {
          setQuestionIndex(questionIndex + 1);
        } else {
          form.setErrors({ [question.id]: "Wrong answer!" });
        }
      } else if (
        form.values[question.id].toLowerCase().replace(/\s/g, "") ===
        question.answer.toLowerCase().replace(/\s/g, "")
      ) {
        setQuestionIndex(questionIndex + 1);
      } else {
        form.setErrors({ [question.id]: "Wrong answer!" });
      }
    } else {
      if (
        form.values[question.id].toLowerCase().replace(/\s/g, "") ===
        question.answer.toLowerCase().replace(/\s/g, "")
      ) {
        setLoading(true);
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        form.setErrors({ [question.id]: "Wrong answer!" });
      }
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
            <Button fullWidth mt="lg" type="submit" disabled={loading}>
              Submit
            </Button>
          </form>
        </Stack>
      </Paper>
    </Center>
  );
}
