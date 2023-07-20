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
import { useState } from 'react'

export type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <CardContainer>
        <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>
        <TitleCard>{title} </TitleCard>
        <Description>{description}</Description>
        <Button
          type="button"
          title="Clique para saber mais detalhes"
          onClick={() => setModalOpen(true)}
        >
          Mais detalhes
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
            <h3>Pizza Marguerita</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam adicionam adicionam um toque de sabor herbáceo. É uma
              pizza simples, mas deliciosa, que agrada a todos os paladares e é
              uma para qualquer ocasião.
              <br />
              <br />
              <br />
              Serve: de 2 a 3 pessoas
            </p>
            <Button type="button" title={'Adicionar ao carrinho'}>
              Adicionar ao carrinho - R$ 60,90
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
