/// <reference lib="deno.ns" />
import { assertEquals } from "https://deno.land/std@0.191.0/testing/asserts.ts"; // Adjust the version if necessary
import { Group, User, UserBuilder } from "./main.ts"; // Adjust the path if needed

Deno.test("UserBuilder creates a user with a group", () => {
  const programmers = new Group("ProgrammingGroup");
  const userWithGroup = new UserBuilder("Jonas")
    .withGroup(programmers)
    .build();

  assertEquals(userWithGroup.name, "Jonas");
  assertEquals(userWithGroup.group?.name, "ProgrammingGroup");
});

Deno.test("UserBuilder creates a user without a group", () => {
  const userWithoutGroup = new UserBuilder("Jonas").build();

  assertEquals(userWithoutGroup.name, "Jonas");
  assertEquals(userWithoutGroup.group, undefined);
});