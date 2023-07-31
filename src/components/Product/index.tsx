import { useState } from 'react'

import close from '../../assets/images/close.png'
import { getDescription } from '../Restaurant'

import {
  CardContainer,
  Description,
  Imagem,
  Modal,
  ModalContainer,
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

  return (
    <>
      <CardContainer>
        <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>
        <TitleCard>{title} </TitleCard>
        <Description>{getDescription(description)}</Description>
        <Button
          type="button"
          title="Clique para saber mais detalhes"
          onClick={() => setModalOpen(true)}
        >
          <h4>Mais detalhes</h4>
        </Button>
      </CardContainer>
      <Modal className={modalOpen ? 'isVisible' : ''}>
        <ModalContainer>
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
            <p>{description}</p>
            <p>{portion}</p>
            <div>
              <Button type="button" title={'Adicionar ao carrinho'}>
                Adicionar ao carrinho -
              </Button>
              <span>{formatPrices(prices)}</span>
            </div>
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
