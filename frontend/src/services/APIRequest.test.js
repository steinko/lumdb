import { APIRequest } from './ApiRequest'
import fetch from 'jest-fetch-mock'
 
describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
 
  it('calls google and returns data to me', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' })) 
	const result = await  APIRequest('google')
	expect(result).toEqual({"data": "12345"})
    expect(fetch).toBeCalled()
    expect(fetch).toBeCalledWith('https://google.com')
  })
})