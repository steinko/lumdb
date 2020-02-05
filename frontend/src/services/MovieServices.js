//import Logger from '../util/Logger'
const getMovies = async () => {
	//const logger = Logger.getLogger()
	
	try {
		 let  respons = await  fetch('https://api.themoviedb.org/3/discover/movie?api_key=f005564c5f608aa255153168cebfdcf6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1', )
		  return await respons.json()
		//  if (!respons.ok){
		  //   logger.error(respons.status)
			// throw respons.status
		 /// }
	 } catch(error) {
		//  logger.error(error)
     }
    
}

export {getMovies}