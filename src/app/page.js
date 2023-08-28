"use client";
import {
  Container,
  Rating,
  Text,
  Title,
  Textarea,
  Button,
  Divider,
  Group,
  Pagination,
} from "@mantine/core";
import { Unbounded } from "next/font/google";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      ></Textarea>
      <Button color="orange" mt="xs">
        Submit Review
      </Button>

      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly />
      </Group>
      <Text color="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly />
      </Group>
      <Text color="dimmed" align="center">
        My favourite part is pepperoni
      </Text>
      <Pagination mt="md" total={20} position="center" color="orange" />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Patiphan Klinhom 650610781
      </Text>
    </Container>
  );
}
