import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-erros'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('Signup controller', () => {
  test('Should return 400 if no name is provided.', () => {
    const sut = makeSut()
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

  test('Should return 400 if no e-mail is provided.', () => {
    const sut = makeSut()
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

  test('Should return 400 if no password is provided.', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'anyname',
        email: 'anyemail@email.com',
        passwordConfirmation: 'anypassword'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if no password confirmation is provided.', () => {
    const sut = makeSut()
    const httpRequest = {
      body: {
        name: 'anyname',
        email: 'anyemail@email.com',
        password: 'anypassword'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
