/* @flow*/

import React, { useLayoutEffect } from "react";
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
  Avatar,
  Button,
  Card,
  StatChange,
  SectionSeparator
} from "playbook-ui";

const kpis = [
  {
    title: "Revenue",
    value: 26,
    increase: true,
    active: true
  },
  {
    title: "Orders",
    value: 26,
    increase: false,
    active: false
  },
  {
    title: "Revenue",
    value: 26,
    increase: false,
    active: false
  }
];

export default function App() {
  return (
    <div className="App">
      <Background
        shadow="deep"
        backgroundColor="white"
        paddingLeft="md"
        paddingY="xs"
      >
        <Flex
          className="container"
          orientation="row"
          spacing="between"
          justify="center"
          align="center"
        >
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
      <SectionSeparator />
      <Background backgroundColor="white" paddingBottom="none">
        <Flex
          className="container"
          paddingLeft="xl"
          paddingRight="md"
          spacing="between"
        >
          <FlexItem>
            <Nav link="#" marginLeft="sm" orientation="horizontal">
              <NavItem active link="#" text="Dashboards" />
              <NavItem link="#" text="Products" />
              <NavItem link="#" text="In Progress" />
              <NavItem link="#" text="Settings" />
            </Nav>
          </FlexItem>
        </Flex>
      </Background>
      <Flex
        className="container"
        orientation="column"
        padding="xl"
        align="stretch"
      >
        <FlexItem>
          <Caption text="Dashboard" />
          <Title text="Commerce Dashboard" />
        </FlexItem>
        <FlexItem grow>
          <Card padding="none">
            <Card.Body padding="xs">
              <Flex orientation="row" align="center" spacing="between">
                <FlexItem>
                  <Title text="Key Performance Indicators" tag="h4" size={4} />
                </FlexItem>
                <FlexItem>
                  <CircleIconButton icon="ellipsis-h" variant="secondary" />
                </FlexItem>
              </Flex>
            </Card.Body>
            <SectionSeparator variant="card" />
            <Card.Body>
              <Flex orientation="row">
                <FlexItem flex={3}>
                  <Nav orientation="vertical">
                    <NavItem active link="#">
                      <Flex orientation="row">
                        <Title text="Revenue" />
                        <StatChange change="increase" value="26%" />
                      </Flex>
                    </NavItem>
                    <NavItem link="#" text="Orders"></NavItem>
                    <StatChange change="increase" value={26} />
                  </Nav>
                </FlexItem>
                <FlexItem flex={8}></FlexItem>
              </Flex>
            </Card.Body>
          </Card>
        </FlexItem>
      </Flex>
    </div>
  );
}
