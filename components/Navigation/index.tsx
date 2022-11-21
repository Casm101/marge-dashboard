import { memo } from 'react';
import Link from 'next/link'
import {
  StyledNavigation,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  Links,
} from "./styles";

interface IMessage {
  title: string;
  subtitle: string;
}

interface IPage {
  name: string;
  url: string;
  message: IMessage;
}

interface INav {
  logo: string;
  title: string;
  subtitle: string;
  pages: IPage[];
}

export const Navigation = memo<INav>(({ logo, title, subtitle, pages }) => {

  const generateLinks = (pageArray: IPage[]) =>
    pageArray.map((page, id) => <Link key={id} href={page.url}>{page.name}</Link>);
  

  return (
    <StyledNavigation>
      <Header>
        <img src={logo} alt="" />
        <div>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubtitle>{subtitle}</HeaderSubtitle>
        </div>
      </Header>
      <Links>
        <span>{generateLinks(pages)}</span>
      </Links>
    </StyledNavigation>
  );
});