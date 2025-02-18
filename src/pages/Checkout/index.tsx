import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Card from '../../components/Card'

import boleto from '../../assets/images/boleto.png'
import card from '../../assets/images/cartao.png'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'
import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'
import { getTotalPrice, parseToBrl } from '../../utils'

type Installment = {
  qty: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installment[]>([])

  const totalPrice = getTotalPrice(items)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expireMonth: '',
      expireYear: '',
      cardCode: '',
      installments: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'This field must have at least 5 characters')
        .required('This field must be filled!'),
      email: Yup.string()
        .email('Invalid email address')
        .required('This field must be filled!'),
      cpf: Yup.string()
        .min(14, 'This field must have 14 characters')
        .max(14, 'This field must have 14 characters')
        .required('This field must be filled!'),
      deliveryEmail: Yup.string()
        .email('Invalid email address')
        .required('This field must be filled!'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'The fields do not match!')
        .required('This field must be filled!'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('This field must be filled!') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('This field must be filled!') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('This field must be filled!') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('This field must be filled!') : schema
      ),
      expireMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('This field must be filled!') : schema
      ),
      expireYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('This field must be filled!') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('This field must be filled!') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('This field must be filled!') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2025
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installment[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          qty: i,
          amount: totalPrice / i,
          formattedAmount: parseToBrl(totalPrice / i)
        })
      }
      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Thank you">
          <>
            <p>
              We are pleased to inform you that we have successfully received
              your order!
              <br />
              Below are the details of your purchase:
              <br />
              Order Number: {data.orderId}
              <br />
              Payment Method: {payWithCard ? 'Credit Card' : 'Boleto Bancário'}
            </p>
            <p className="marginTop">
              If you have chosen to pay via boleto bancário, please note that
              confirmation may take up to 3 business days. Once the payment is
              approved, we will send an email containing the game activation
              code.
            </p>
            <p className="marginTop">
              If you opted for credit card payment, the activation code will be
              released after the transaction is approved by the card provider.
              You will receive the code at the email address registered in our
              store.
            </p>
            <p className="marginTop">
              Please check your inbox and spam folder to ensure you receive our
              communication. If you have any questions or need further
              information, please contact us through our customer service
              channels.
            </p>
            <p className="marginTop">
              Thank you for choosing EPLAY! We hope you enjoy your game!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title={'Billing info'}>
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>

              <h3 className="marginTop">Delivery info - digital content</h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    id="deliveryEmail"
                    type="email"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    id="confirmDeliveryEmail"
                    type="email"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputHasError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title={'Payment'}>
            <>
              <S.TabButton
                type="button"
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
              >
                <img src={boleto} alt="Boleto" />
                Boleto bancário
              </S.TabButton>
              <S.TabButton
                type="button"
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
              >
                <img src={card} alt="Credit Card" />
                Credit card
              </S.TabButton>
              <div className="marginTop">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">Card Holder</label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCardOwner">
                          Card Holder&apos;s CPF
                        </label>
                        <input
                          type="text"
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cpfCardOwner') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">
                          Card&apos;s display name
                        </label>
                        <input
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardDisplayName') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Card number</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expireMonth">Expiration month</label>
                        <input
                          type="text"
                          id="expireMonth"
                          name="expireMonth"
                          value={form.values.expireMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expireMonth') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expireMonth">Expiration year</label>
                        <input
                          type="text"
                          id="expireMonth"
                          name="expireMonth"
                          value={form.values.expireMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expireYear') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="150px">
                        <label htmlFor="installments">Installments</label>
                        <select
                          id="installments"
                          name="installments"
                          value={form.values.installments}
                        >
                          {installments.map((installment) => (
                            <option key={installment.qty}>
                              {installment.qty}x {installment.formattedAmount}
                            </option>
                          ))}
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    When choosing this payment method, it is important to
                    remember that confirmation may take up to 3 business days
                    due to the timelines set by financial institutions.
                    Therefore, the activation code for the purchased game will
                    only be released after the payment of the boleto is
                    approved.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            onClick={form.handleSubmit}
            type="submit"
            title={'Click here to finish the purchase'}
          >
            Finish purchase
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
