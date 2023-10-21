import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { getUsers, getRepos, getLangsFrom } from '../../services/api'

import { Conteiner, Sidebar, Main, Loading } from './styles';


function RepositoriesPage() {

  const  { login }  = useParams()

  const [user, setUser] = useState()
  const [repositories, setRepositories] = useState()
  const [currentLanguage, setCurrentLanguage] = useState()
  const [loading, setLoading] = useState(true)
  const [ languages, setLanguages] = useState()

  useEffect(() => {
    const loadData = async() => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUsers(login),
        getRepos(login)
      ])

      setUser(userResponse.data)
      setRepositories(repositoriesResponse.data)
      setLanguages(getLangsFrom(repositoriesResponse.data))

      setLoading(false)
    }
    loadData()
  }, [])

  const onFilterClick = (language) => {
    setCurrentLanguage(language)
  }

  if(loading){
    return <Loading>Carregando...</Loading>
  }

  return (
    <Conteiner>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages}
        currentLanguage={currentLanguage}
        onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
        repositories={repositories}
        currentLanguage={currentLanguage}/>
      </Main>
    </Conteiner>
  )
}

export default RepositoriesPage;
