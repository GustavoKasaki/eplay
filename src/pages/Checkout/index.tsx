import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row } from './styles'

const Checkout = () => (
  <div className="container">
    <Card title={'Dados de cobrança'}>
      <>
        <Row>
          <InputGroup>
            <label htmlFor="fullName">Nome completo</label>
            <input id="fullName" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpf">CPF</label>
            <input id="cpf" type="text" />
          </InputGroup>
        </Row>

        <h3 className="marginTop">Dados de entrega - conteúdo digital</h3>
        <Row>
          <InputGroup>
            <label htmlFor="deliveryEmail">E-mail</label>
            <input id="deliveryEmail" type="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
            <input id="confirmDeliveryEmail" type="email" />
          </InputGroup>
        </Row>
      </>
    </Card>
    <Card title={'Pagamento'}>
      <>
        <Row>
          <p>
            When choosing this payment method, it is important to remember that
            confirmation may take up to 3 business days due to the timelines set
            by financial institutions. Therefore, the activation code for the
            purchased game will only be released after the payment of the boleto
            is approved.
          </p>
        </Row>
      </>
    </Card>
    <Button type="button" title={'Click here to finish the purchase'}>
      Finish purchase
    </Button>
  </div>
)

export default Checkout
