import React from "react";
import styled from "styled-components";
import { TagWrapper } from "../components/tag/Tag";
import { accentColor, backgroundColor2 } from "../misc/style";

export const StyledIcon = styled.i`
  ${({ color, size }) => `
    color: ${color};
    min-width: ${size}px;
    height: ${size}px;

    ${TagWrapper}:hover & {
      color: ${accentColor};
    }

    ${TagWrapper}:active & ,  ${TagWrapper}:focus & {
      color: ${backgroundColor2};
    }
  `}
`;

const IconWrapper = styled.span`
  line-height: 16px;
  ${({ left }) => (left ? "margin-right: 5px;" : "")}
  ${({ right }) => (right ? "margin-left: 5px;" : "")}
`;

const Icon = ({ className, icon, color, size, onClick, left, right }) => (
  <IconWrapper onClick={onClick} left={left} right={right}>
    <StyledIcon
      className={`fas ${icon} ${className}`}
      color={color}
      size={size}
    />
  </IconWrapper>
);

Icon.defaultProps = {
  color: "black",
  size: 14
};

export function CharacterIcon(props) {
  return <Icon icon="fa-user" {...props} />;
}

export function ArtistIcon(props) {
  return <Icon icon="fa-pen" {...props} />;
}

export function CopyrightIcon(props) {
  return <Icon icon="fa-copyright" {...props} />;
}

export function PlusIcon(props) {
  return <Icon icon="fa-plus-circle" {...props} />;
}

export function MinusIcon(props) {
  return <Icon icon="fa-minus-circle" {...props} />;
}

export function CloseIcon(props) {
  return <Icon icon="fa-times" {...props} />;
}

export function ExpandIcon(props) {
  return <Icon icon="fa-expand" {...props} />;
}

export function ArrowIcon(props) {
  return <Icon icon="fa-caret-down" {...props} />;
}

export function ExternalLinkIcon(props) {
  return <Icon icon="fa-external-link-alt" {...props} />;
}

export function SourceIcon(props) {
  return <Icon icon="fa-hashtag" {...props} />;
}

export function RatingIcon(props) {
  return <Icon icon="fa-registered" {...props} />;
}

export function HeartIcon(props) {
  return <Icon icon="fa-heart" {...props} />;
}

export function PlayIcon(props) {
  return <Icon icon="fa-play" {...props} />;
}

export function PauseIcon(props) {
  return <Icon icon="fa-pause" {...props} />;
}