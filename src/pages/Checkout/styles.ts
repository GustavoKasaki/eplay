import styled from 'styled-components'
import { Colors } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${Colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${Colors.white};
    width: 100%;
  }
`
