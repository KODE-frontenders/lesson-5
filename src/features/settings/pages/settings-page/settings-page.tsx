import React from "react";
import { ThemeSwitch } from "features/settings/theme-switch/theme-switch";
import { PageTemplate } from "shared/templates/page/page";
import styled from "styled-components";

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const StyledUnorderedList = styled.ul`
  padding: 0;
`;

type Props = {
  toggleTheme: () => void;
};

export const SettingsPage: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <PageTemplate title="Settings" linkTo="todos">
        <StyledUnorderedList>
          <StyledListItem>
            <span>Theme</span>
            <ThemeSwitch toggleTheme={toggleTheme} />
          </StyledListItem>
        </StyledUnorderedList>
      </PageTemplate>
    </>
  );
};
