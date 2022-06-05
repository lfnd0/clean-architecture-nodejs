import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-erros'

describe('Signup controller', () => {
  test('Should return 400 if no name is provided.', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'anyemail@email.com',
        password: 'anypassword',
        passwordConfirmation: 'anypassword'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
})

describe('Signup controller', () => {
  test('Should return 400 if no e-mail is provided.', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'anyname',
        password: 'anypassword',
        passwordConfirmation: 'anypassword'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
})
