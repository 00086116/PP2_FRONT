
describe('carga de citas', () => {
  beforeEach(() => {

    cy.visit('http://localhost:8000/Home')
  })

  it('se realiza la carga de la pagina', () => {

    cy.get('h1').contains('Citas,perfil,etc')


  })
  it('se realiza la carga del calendario', () => {

    cy.get('button').contains('month').click()


  })
  it('comprobacion de la ventana modal', () => {

    cy.get('div[class="fc-timegrid-body"]').click('center')


  })

  })
