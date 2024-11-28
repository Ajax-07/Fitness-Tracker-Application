// import { useEffect, useState } from "react";

import {
  Card,
  Left,
  Right,
  Icon,
  Title,
  Value,
  Unit,
  Span,
  Desc,
} from "./StyledComponent";

export default function CountCard({ item, data }) {
  
  return (
    <Card>
      <Left>
        <Title>{item.name}</Title>
        <Value>
          {data && data[item.key]}
          <Unit>{item.unit}</Unit>
          <Span positive>[+10%]</Span>
        </Value>
        <Desc>{item.desc}</Desc>
      </Left>
      <Right>
        <Icon color={item.color} bg={item.lightColor}>
          {item.icon}
        </Icon>
      </Right>
    </Card>
  );
}
