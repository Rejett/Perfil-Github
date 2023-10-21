import React from 'react'

import PropTypes from 'prop-types'

import { langColors } from '../../../../services/config';

import { Container, Name, Description, Footer, Lang, Link } from './styles';


function Repository({ repository }) {

  // eslint-disable-next-line react/prop-types
  const color = langColors[repository.language && repository.language.toLowerCase()]

  return (
    <Container color={color}>
        <Name color={color}>{repository.name}</Name>
        <Description>{repository.description}</Description>
        <Footer color={color}>
          <Lang>{repository.language}</Lang>
          <Link href={repository.html_url} target='_blank'>Ver</Link>
        </Footer>
    </Container>
  )
}

Repository.propTypes = {
  repository: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired
}

export default Repository
