import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import gitHubLogo from '../../assets/images/github-logo.svg'

function MainPage() {

  const [login, setLogin] = useState('');

    return (
      <Container>
          <Logo src={gitHubLogo} alt="Api-GitHub" />
          <Title>API GitHub</Title>
          <Form>
            <Input
            placeholder="Nome Usuario"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            />
            <Button to={`/${login}/repositories`}>
              <MdSearch size={42}/>
            </Button>
          </Form>
      </Container>
    );
}



export default MainPage
