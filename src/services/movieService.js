const Movie=require('../models/Movie')

const movies=[
    {
   _id:1,
  title: ' Jungle Cuise',
  genre: 'adventure',
  director: 'Spilberg',
  date: '2019',
  imgUrl: "/img/jungle-cruise.jpeg",
  rating: '3',
  description: 'Dreaming about saving countless lives and having another adventure'  
}
]


exports.create= async (movieData)=>{
  // movieData._id=movies[movies.length-1]._id+1
  // movies.push(movieData)
  // console.log(movieData)
  const result =await Movie.create(movieData)
  return result
   
}
exports.getAll=()=>{
   
  return movies.slice()
}
exports.getOne=(movieId)=>{
  return movies.find(movie=>movie._id==movieId)
}
exports.search=(title,genre,year)=>{
  let result=movies.slice()
  if(title){
    result=result.filter(m=>m.title.toLowerCase().includes(title.toLowerCase()))
  }
  if(genre){
    result=result.filter(m=>m.genre.toLowerCase()==genre.toLowerCase())
  }
if(year){
    result=result.filter(m=>m.year==year)
  }
  //console.log(result)
  return result
}