import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${Colors.gray};
  padding: 24px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-weight: bold;
    font-size: 18px;
    color: ${Colors.white};
    margin-bottom: 24px;
  }

  .marginTop {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
