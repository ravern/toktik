import { Anchor, AppShell, Group, Header, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

import LogoPNG from "../assets/logo.png";

export default function LandingPage() {
  return (
    <AppShell
      header={
        <Header p="sm">
          <Group position="apart">
            <Image
              alt="TokTik logo"
              mb="sm"
              src={LogoPNG}
              width={100}
              height={30}
            />
            <Anchor component={Link} to="/login">
              <Text>Login</Text>
            </Anchor>
          </Group>
        </Header>
      }
    ></AppShell>
  );
}
