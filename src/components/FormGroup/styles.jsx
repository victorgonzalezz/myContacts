import styled from 'styled-components';

export const Container = styled.div`
& + & { //modo de selecionar todos de uma vez
  margin-top: 16px;
}
`;
