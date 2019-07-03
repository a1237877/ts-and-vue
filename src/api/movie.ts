import request from '@/utils/retuest';

export const getMovieList = (data:string)=>{
  return request({
    url:`/api/movie/${data}?apikey=0df993c66c0c636e29ecbb5344252a4a`,
    method:'GET'
  })
}