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


exports.create=(movieData)=>{
  movieData._id=movies[movies.length-1]._id+1
  movies.push(movieData)
  //console.log(movieData)
   
}
exports.getAll=()=>{
   
  return movies.slice()
}
exports.getOne=(movieId)=>{
  return movies.find(movie=>movie._id==movieId)
}