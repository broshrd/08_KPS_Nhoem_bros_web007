export const getmovies =async()=>{
    const res= await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    const data =await res.json();
    return data;
}
export const getmoviesById =async(id)=>{
    const res= await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`);
    
    //const res= await fetch(`https://movie-api-get-only-bmc3.vercel.app/api${id}`);
    const data = await res.json();
    return data;
}