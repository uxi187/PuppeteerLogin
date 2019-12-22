
context('Login with puppeteer and return cookies to Cypress', () => {
    const username = 'john@sharklasers.com'
    const password = 'Qwerty123'

    const loginOptions = {
        username,
        password,
        loginUrl: 'https://www.aboutyou.de/oauth/login',
        headless: true,
        logs: true,
        postLoginSelector: 'a[data-test-id="WishlistIconHeader"]',
        getAllBrowserCookies: true
    }

    beforeEach(() => {
        cy.visit('https://www.aboutyou.de/dein-shop')
        cy.task('Login', loginOptions).then(({ cookies }) => {
            cy.clearCookies()
            cookies.forEach(c => cy.setCookie(c.name, c.value))
        })
    })

    afterEach(() => { cy.clearCookies() })

    it('Login using puppeteer', () => {

        cy.visit('https://www.aboutyou.de/dein-shop')
        cy.get('li[data-test-id="Basket"] a[data-test-id="WishlistIconHeader"]').should('be.visible').click()
    })
})
