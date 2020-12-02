import React from "react";
import { PageTemplate } from "shared/templates/page/page";

export const NotFound: React.FC = () => {
  return (
    <PageTemplate title="404!" linkTo="todos">
      <p>Sorry, nothing here 🤷‍♂️</p>
    </PageTemplate>
  );
};
