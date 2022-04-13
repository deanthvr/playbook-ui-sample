/* @flow*/

import React, { useLayoutEffect, useState } from "react";
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
import { KpiDashboard } from "./components/KpiDashboard";

const kpiRevenue = [
  {
    label: "5/1",
    value: 45000
  },
  {
    label: "6/1",
    value: 50000
  },
  {
    label: "7/1",
    value: 60000
  },
  {
    label: "8/1",
    value: 70000
  },
  {
    label: "9/1",
    value: 75000
  },
  {
    label: "10/1",
    value: 80000
  },
  {
    label: "11/1",
    value: 90000
  },
  {
    label: "12/1",
    value: 100000
  }
];
const kpiOrders = [
  {
    label: "5/1",
    value: 5000
  },
  {
    label: "6/1",
    value: 5100
  },
  {
    label: "7/1",
    value: 5500
  },
  {
    label: "8/1",
    value: 5000
  },
  {
    label: "9/1",
    value: 4900
  },
  {
    label: "10/1",
    value: 4850
  },
  {
    label: "11/1",
    value: 4900
  },
  {
    label: "12/1",
    value: 4800
  }
];

const kpiOptions = [
  {
    title: "Revenue",
    value: 26,
    change: "increase",
    data: kpiRevenue
  },
  {
    title: "Orders",
    value: 2,
    change: "decrease",
    data: kpiOrders
  },
  {
    title: "Profit",
    value: null,
    change: "",
    data: kpiOrders
  },
  {
    title: "Average Check",
    value: 5,
    change: "increase",
    data: kpiRevenue
  },
  {
    title: "Cancelled",
    value: 18,
    change: "decrease",
    data: kpiRevenue
  },
  {
    title: "Repeat Sales",
    value: null,
    change: "",
    data: kpiRevenue
  }
];

export default function App() {
  //lets initialize some data for the kpi graph
  const kpiDataInit = [
    {
      name: "data",
      data: kpiRevenue.map((data) => data.value)
    }
  ];
  const [selectedKpiIndex, setSelectedKpiIndex] = useState(0);
  const [kpiData, setKpiData] = useState(kpiDataInit);
  const [kpiLabels, setKpiLables] = useState(
    kpiRevenue.map((data) => data.label)
  );
  const [tickets, setTickets] = useState([]);
  const handleKpiSelect = (index) => {
    setSelectedKpiIndex(index);
    let newData = [
      {
        name: "data",
        data: kpiOptions[index].data.map((data) => data.value)
      }
    ];
    setKpiData(newData);
    setKpiLables(kpiOptions[index].data.map((data) => data.label));
  };

  //lets fetch from json file the ticket statuses
  fetch("./tickets.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log("tickets", data);
      setTickets(data.ticketEscalations);
    });

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
          <KpiDashboard
            options={kpiOptions}
            selected={selectedKpiIndex}
            data={kpiData}
            labels={kpiLabels}
            handleKpiSelect={handleKpiSelect}
          ></KpiDashboard>
        </FlexItem>
      </Flex>
      <Flex
        className="container"
        orientation="column"
        padding="none"
        align="center"
      >
        <FlexItem>
          <Caption text="This Weeks Ticked Ecalations" />
        </FlexItem>
        <Flex orientation="row">
          {tickets
            ? tickets.map((type) => {
                return (
                  <FlexItem>
                    <Card>
                      <Card.Title
                        highligt={{ position: "side", color: "windows" }}
                      >
                        <Title text={type.status} />
                      </Card.Title>
                    </Card>
                  </FlexItem>
                );
              })
            : ""}
        </Flex>
      </Flex>
    </div>
  );
}
