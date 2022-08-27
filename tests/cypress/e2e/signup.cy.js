import signupPage from '../support/pages/Signup'

describe('Signup', () => {

    it('Deve cadastrar um novo usuário', () => {

        // Dado que eu tenho a becca milano
        const user = {
            name: 'Becca Milano',
            instagram: '@becca_milano',
            password: 'pwd123'
        }

        // E que ess usuário não existe no banco
        // cy.deleteMany({ instagram: user.instagram }, {collection: 'users'}).then(res => {
        //     cy.log(res)
        // });

        cy.apiResetUser(user.instagram)

        //Quando faço o cadastro do memo
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        // Entaõa devo ver a mensagem de sucesso
        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    })

    it('Não Deve cadastrar com instagram duplicado', () => {

        const user = {
            name: 'Érick Jacquin',
            instagram: '@Jacquin',
            password: 'pwd1234'
        }

        cy.apiResetUser(user.instagram)
        cy.apiCreateUser(user)

        signupPage.go()
        signupPage.form(user)
        signupPage.submit()

        signupPage.modal.haveText('Instagram já cadastrado!')
    })
})


