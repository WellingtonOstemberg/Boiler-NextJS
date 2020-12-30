import React from 'react'
import * as S from './styles'

export default function Main({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="imagem de um átomo representando a logo do ReactJS"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Imagem de um desenvolvedor de frente para um computador com códigos"
      />
    </S.Wrapper>
  )
}
