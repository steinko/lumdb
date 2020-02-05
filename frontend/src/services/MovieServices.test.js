import {getMovies} from './MovieServices'

describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
 
  it('calls google and returns data to me', async () => {
	const data = 
	   { results: 
		  [{ 
			"id": 419704,
			"title": "Ad Astra"
		   }]
		 }

    fetch.mockResponseOnce(JSON.stringify( data))	
	const result = await  getMovies()
	expect(result).toEqual(data)
  }) 
})