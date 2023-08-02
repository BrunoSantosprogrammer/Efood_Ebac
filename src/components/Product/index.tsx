import { useState } from 'react'

import close from '../../assets/images/close.png'

import {
  BtnModalContainer,
  CardContainer,
  Description,
  Imagem,
  Modal,
  ModalContainer,
  ModalDescription,
  TitleCard
} from './styles'
import Button from '../Button'

type Props = {
  title: string
  description: string
  image: string
  id: number
  prices: number
  portion: string
}

const formatPrices = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Product = ({ title, description, image, prices, portion }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => {
    setModalOpen(false)
  }

  const getDescriptionProduct = (description: string) => {
    if (description.length > 147) {
      return description.slice(0, 147) + '...'
    }
    return description
  }

  return (
    <>
      <CardContainer className="container">
        <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>
        <TitleCard>{title} </TitleCard>
        <Description>{getDescriptionProduct(description)}</Description>
        <Button
          type="button"
          title="Clique para adicionar ao carrinho"
          onClick={() => setModalOpen(true)}
        >
          <h4>Adicionar ao carrinho</h4>
        </Button>
      </CardContainer>
      <Modal className={modalOpen ? 'isVisible' : ''}>
        <ModalContainer className="container">
          <img src={image} alt={title} />
          <div>
            <img
              src={close}
              alt="Close"
              onClick={() => {
                closeModal()
              }}
            />
            <h3>{title}</h3>
            <ModalDescription>
              <p>{description}</p>
              <br /> <br />
              <p>{portion}</p>
            </ModalDescription>
            <BtnModalContainer>
              <Button type="button" title={'Adicionar ao carrinho'}>
                Adicionar ao carrinho -
              </Button>
              <span>{formatPrices(prices)}</span>
            </BtnModalContainer>
          </div>
        </ModalContainer>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Product
