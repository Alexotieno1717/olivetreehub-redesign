import Link from 'next/link';
import styled from 'styled-components';
import { cmsMediaUrl } from '../../utils/cms';
interface NavProps {
  $scrollPosition: number;
  $collapsed: boolean;
  $colors?: {
    bg: string;
    buttonColor: string;
    dividerColor: string;
  };
}

interface StyledProps {
  $colors?: {
    bg?: string;
    buttonColor?: string;
    dividerColor?: string;
  };
}

interface StyledTextProps {
  $color: string;
}

interface ListWithIconProps {
  $listIcon: string;
}

interface AnimatedDivProps {
  $durationStart: number;
  $durationEnd: number;
  $isShowing: boolean
}

const Nav = styled.nav<NavProps>`
  background: ${(props) =>
    props.$collapsed === true || props.$scrollPosition > 10 ? props?.$colors?.bg : 'transparent'};
  
  }
  `;

const StyledLink = styled(Link)<StyledProps>`
  background: ${(props) => props.$colors?.buttonColor};
  &:hover {
    background: ${(props) => props.$colors?.buttonColor};
  }
`;

const StyledButton = styled.button<StyledProps>`
  background: ${(props) => props.$colors?.buttonColor};
  &:hover {
    background: ${(props) => props.$colors?.buttonColor};
  }
`;

const StyledSection = styled.section<StyledProps>`
  background-color: ${(props) => props.$colors?.bg}
`

const StyledLinkOutline = styled(Link)<StyledProps>`
border-color: ${(props) => props.$colors?.buttonColor};
&:hover {
  background-color: ${(props) => props.$colors?.buttonColor}
}

`
const Ul = styled.ul<StyledProps>`
  background: ${(props) => props.$colors?.bg};
`;

const StyledListLink = styled(Link)<StyledProps>`
  &:hover {
    background: ${(props) => props.$colors?.buttonColor};
  }
`;
const StyledListLinkSecondary = styled(Link)<StyledProps>`
  &:hover {
    color: ${(props) => props.$colors?.buttonColor};
  }
`;
const StyledList = styled.li<StyledProps>`
  background-color: transparent;
  &:hover {
    color: ${(props) => props.$colors?.buttonColor};
  }
`;

const FooterStyled = styled.footer<StyledProps>`
  background-color: ${(props) => props.$colors?.bg};
`;

const StyledLinkSecondary = styled(Link)<StyledProps>`
  color: ${(props) => props.$colors?.buttonColor};
  &:hover {
    color: ${(props) => props.$colors?.buttonColor};
  }
`;

const H1 = styled.h1<StyledTextProps>`
  color: ${(props) => props.$color}
`

const ListWithIcon = styled.li<ListWithIconProps>`
background: ${(props) => `url(${cmsMediaUrl(props.$listIcon)})`};
background-repeat: no-repeat`

const DivWithBorderOnTop =  styled.div<StyledTextProps>`
border-top-color: ${(props) => props.$color}
`
const Circle = styled.div<StyledTextProps>`
border-color: ${(props) => props.$color}
`

const ColumnWithDivider =  styled.div<StyledTextProps>`
border-color: ${(props) => props.$color}
`

const H2 = styled.h1<StyledTextProps>`
  color: ${(props) => props.$color}
`

const AnimatedDiv = styled.div<AnimatedDivProps>`
visibility: ${(props) => props.$isShowing === true? "visible" : "hidden"};
opacity: ${(props) => props.$isShowing === true? "1" : "0"};
transition: ${(props) => props.$isShowing === true ? "visibility 0s linear 0s, opacity " + props.$durationStart+ "ms" : "visibility 0s linear " + props.$durationStart+"ms, opacity " + props.$durationStart+ "ms" }

`


export { FooterStyled, Nav, StyledLink, StyledLinkSecondary, StyledList, StyledListLink, StyledListLinkSecondary, Ul, H1, ListWithIcon, DivWithBorderOnTop, Circle, StyledSection, StyledLinkOutline, H2, ColumnWithDivider, AnimatedDiv,StyledButton };
