import styled from 'styled-components';

export const Container = styled.div`
& + & { //modo de selecionar todos de uma vez
  margin-top: 16px;
}

small {
  color: ${({ theme }) => theme.colors.danger.main};
  font-size: 12px;
  display: block;
  margin-top: 8px;
}
`;
