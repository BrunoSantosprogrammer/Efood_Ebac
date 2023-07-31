import { useState } from 'react'

import {
  CardContainer,
  Description,
  Imagem,
  Modal,
  ModalContainer,
  TitleCard
} from './styles'
import Button from '../Button'

import close from '../../assets/images/close.png'

type Props = {
  title: string
  description: string
  image: string
  id: number
  prices: number
  portion: string
}

const Product = ({ title, description, image, id, prices, portion }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <CardContainer to={`/restaurantes/${id}`}>
        <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>
        <TitleCard>{title} </TitleCard>
        <Description>{description}</Description>
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
            <p>
              {description}
              <br />
              <br />
              <br />
            </p>
            <p>{portion}</p>
            <Button type="button" title={'Adicionar ao carrinho'}>
              <h4>Adicionar ao carrinho - {prices}</h4>
            </Button>
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
