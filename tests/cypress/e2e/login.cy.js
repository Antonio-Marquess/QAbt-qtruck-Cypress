import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {
  it('Deve logar com sucesso', () => {
    const user = {
      name: 'Antonio',
      instagram: '@antonio-marques',
      password: 'Ma12345'
    }
    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
  })

  it('Não deve logar com senha inválida', () => {
    const user = {
      instagram: '@antonio-marques',
      password: 'Ma123456'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('Não deve logar com instagram inexistente', () => {

    const user = {
      instagram: '@marques-antonio',
      password: 'Ma12345'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  })

  it('Instagram deve ser obrigatório', () => {
    const user = {
      instagram: '',
      password: 'Ma12345'
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  })

  it('Senha deve ser obrigatória', () => {
    const user = {
      instagram: '@antonio-marques',
      password: ''
    }

    loginPage.go()
    loginPage.form(user)
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  })

  it('Todos os campos são obrigatórios', () => {

    loginPage.go()
    loginPage.submit()

    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  })

  // it('Todos os campos são obrigatórios', () => {
  //   const user = {}

  //   cy.login({})
  //   loginPage.modal.haveText('Por favor, informe suas credenciais!')
  // })

})


