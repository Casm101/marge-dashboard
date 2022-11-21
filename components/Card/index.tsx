import { memo } from 'react';
import { StyledCard, CardHeader, CardBody } from "./styles";

interface ICard {
  title?: string;
  children: React.ReactNode;
  style?: any;
}

export const Card = memo<ICard>(({title, children}) => {
  return (
    <StyledCard>
      {title && <CardHeader>{title}</CardHeader>}
      {children && <CardBody>{children}</CardBody>}
    </StyledCard>
  );
});