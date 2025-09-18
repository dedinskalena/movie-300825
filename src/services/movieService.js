const Movie=require('../models/Movie')

// const movies=[
//     {
//    _id:1,
//   title: ' Jungle Cuise',
//   genre: 'adventure',
//   director: 'Spilberg',
//   date: '2019',
//   imgUrl: "/img/jungle-cruise.jpeg",
//   rating: '3',
//   description: 'Dreaming about saving countless lives and having another adventure'  
// }
// ]


exports.create= (movieData)=>{
  // movieData._id=movies[movies.length-1]._id+1
  // movies.push(movieData)
  // console.log(movieData)
  const result =Movie.create(movieData)
  return result
   
}
exports.getAll= ()=>{
   const movies=Movie.find()
   return movies
  // return movies.slice()
}
exports.getOne=(movieId)=>{
 // return movies.find(movie=>movie._id==movieId)
 return Movie.findById(movieId).populate('casts')
}
exports.search= async(title,genre,year)=>{
  let result=await Movie.find().lean()
  //console.log(result)
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

exports.attach= (movieId,castId)=>{
  // const movie=await this.getOne(movieId)
  // movie.casts.push(castId)
  // return movie.save()
  return Movie.findByIdAndUpdate(movieId,{$push:{casts:castId}})
}