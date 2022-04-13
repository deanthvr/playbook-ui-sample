/* @flow*/

import React from "react";
import {
  CircleIconButton,
  Title,
  Flex,
  FlexItem,
  Background,
  Caption,
  Icon,
  Badge,
  Nav,
  NavItem,
  User,
  Avatar
} from "playbook-ui";

export default function App() {
  return (
    <div className="App">
      <Background backgroundColor="light" paddingLeft="md" paddingY="xs">
        <Flex orientation="row" spacing="between">
          <Flex justify="center" align="center" gap="2">
            <FlexItem marginRight="sm">
              <CircleIconButton icon="plus" variant="primary" />
            </FlexItem>
            <div>
              <Title className="toolbar-title" marginBottom="" text="PB&J" />
              <Caption size="sm" text="International" />
            </div>
          </Flex>
          <Flex justify="center" align="center">
            <Icon icon="bell" />
            <Badge rounded text="4" variant="primary" marginRight="md" />
            <Icon icon="inbox" />
            <Badge rounded text="2" variant="primary" />
            <Flex marginLeft="md" justify="center" align="center">
              <Nav variant="subtle">
                <NavItem iconRight="angle-down">
                  <Flex justify="center" align="center">
                    <User name="Indria Shree" paddingRight="xs" size="sm" />
                    <Avatar
                      size="sm"
                      imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
                      name="Indria Shree"
                    />
                  </Flex>
                </NavItem>
              </Nav>
            </Flex>
          </Flex>
        </Flex>
      </Background>
    </div>
  );
}
