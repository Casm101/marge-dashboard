import { memo } from 'react';
import { StyledCard, CardHeader, CardBody } from "./styles";

interface ICard {
  title?: string;
  children: React.ReactNode;
  tag?: "app" | "ent" | "game" | "iot" | "sys" | "vms";
  style?: any;
}

export const Card = memo<ICard>(({title, tag, children}) => {
  return (
    <StyledCard>
      {title && <CardHeader>{title}</CardHeader>}
      {children && <CardBody>{children}</CardBody>}
      {tag && (
        <div className="tag">
          <p>
            <span>#</span>
            {tag}
          </p>
        </div>
      )}
    </StyledCard>
  );
});