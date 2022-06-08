import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account'

describe('Account Mongo repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should return an account on success', async () => {
    const sut = new AccountMongoRepository()
    const account = await sut.add({
      name: 'anyname',
      email: 'anyemail@mail.com',
      password: 'anypassword'
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('anyname')
    expect(account.email).toBe('anyemail@mail.com')
    expect(account.password).toBe('anypassword')
  })
})
