import styled from "styledComponents";

import { BaseButton } from "Components/styled";

export const CancelButton = BaseButton.extend`
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-right: ${({ theme }) => theme.scale.base};
`;
