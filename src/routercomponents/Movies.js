import React from 'react'
import Row from 'react-bootstrap/Row';
const moviedata = [{
    image_url : "https://files.prokerala.com/movies/pics/800/birthday-poster-of-sai-pallavi-movie-113601.jpg",
    name:'lovestory'
},
{
    image_url:'https://preview.redd.it/telugu-cinema-doesnt-focus-much-on-poster-design-now-but-v0-v41ep26oqrac1.jpeg?width=1000&format=pjpg&auto=webp&s=2ff421ee96632dac11fad88d872fd1c7dd50d2a0',
    name:'dasara'
},
{
    image_url:'https://i.pinimg.com/236x/8e/4e/13/8e4e131e7ee47cfbbd48b9e9ccffda23.jpg',
    name:'temper'
},
{
    image_url:'https://mir-s3-cdn-cf.behance.net/project_modules/hd/e0463f82190771.5d15aed0617e2.jpg',
    name:'bandobast'
},
{
    image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7Ae-oSC6zdVDbmZuQLNb6nDm1xaVpGFkag&s',
    name:'v'
},
{
    image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxojD7Fdz3mjLsbIC-JvYa5uzLGZQdRLLLuQ&s',
    name:'rangastalam'
},
{
    image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVlQHzl93J713_O-kXw5XIuT_eT8pK9QO3A&s',
    name:'varudukavalenu'
},
{
    image_url:'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/21/Victory-Venkatesh-s-Asuran-Telugu-Remake-Narappa-Movie-First-look-HD-Posters-.jpg?fit=2500%2C2031&quality=80&zoom=1&ssl=1',
    name:'narappa'
},
{
    image_url:'https://images.filmibeat.com/ph-big/2024/02/eagle_1707452421100.jpg',
    name:'eagle'
},
{
    image_url:'https://i.pinimg.com/originals/f4/9c/fe/f49cfec780b11c75f22d1bf08411f1fc.jpg',
    name:'linga'
},
{
    image_url:'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/03/12/Thalapathy-vijay-s-Master-movie-Telugu-and-Kannada-First-look-posters-.jpg?fit=1349%2C2048&quality=80&zoom=1&ssl=1',
    name:'master'
},
{
    image_url:'https://teluguone.com/photos/uploadsExt/uploads/A%20Aa%20Movie%20Wallpapers/A%20Aa%20Movie%20Posters/A_Aa_Movie_Posters1_small.jpg',
    name:'aa'
},
{
    image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4AG9tqbg8-mUxWJnuereYzf-7x7GEhTUAA&s',
    name:'chalo'
},
{
    image_url:'https://img.nowrunning.com/content/movie/2018/lover-14716/bg.jpg',
    name:'lover'
},
{
    image_url:'https://thetelugufilmnagar.com/storage/2022/11/Japan-First-look-534x462.webp',
    name:'japan'
},
{
    image_url:'https://st1.latestly.com/wp-content/uploads/2020/08/1-7-5.jpg',
    name:'acharya'
},
{
    image_url:'https://content.tupaki.com/twdata/2018/1118/photos/movies/Diwali%20Special%20Posters%20in%20Upcoming%20Telugu%20Films/normal/Diwali%20Special%20Posters%20in%20Upcoming%20Telugu%20Films_15.jpg',
    name:'mrmajnu'
},
{
    image_url:'https://www.attapur.in/wp-content/uploads/2016/08/100-days-of-Love-Telugu-Movie-Release-date-Posters-3.jpg',
    name:'100%love'
},
{
    image_url:'https://live.staticflickr.com/3663/3437059097_377dc20df3_b.jpg',
    name:'billa'
},
{
    image_url:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00310216-yyucvmkrwl-portrait.jpg',
    name:'devera'
},
{
    image_url:'https://i.pinimg.com/736x/8e/60/5f/8e605feff74ec94537d5c273a1d20a18.jpg',
    name:'patas'
},
{
    image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyCo9Ki3tNk_W7ChiAjD9LiyLogt1asEssA&s',
    name:'romance'
},
{
    image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbGvtC7vVKIlZ8zRIV8MqLCiflDGY0lxRDQ&s',
    name:'jersey'
},
{
    image_url:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/allu-arjun-072241749-16x9_0.jpg?VersionId=K_n8YW.C2E4R3xdcdF74eB_BV9dtRyed',
    name:'pushpa'
},
{
    image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxojD7Fdz3mjLsbIC-JvYa5uzLGZQdRLLLuQ&s',
    name:'rangastalam'
},
{
    image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVlQHzl93J713_O-kXw5XIuT_eT8pK9QO3A&s',
    name:'varudukavalenu'
},
{
    image_url:'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/21/Victory-Venkatesh-s-Asuran-Telugu-Remake-Narappa-Movie-First-look-HD-Posters-.jpg?fit=2500%2C2031&quality=80&zoom=1&ssl=1',
    name:'narappa'
},
{
    image_url:'https://images.filmibeat.com/ph-big/2024/02/eagle_1707452421100.jpg',
    name:'eagle'
},
{
    image_url:'https://i.pinimg.com/originals/f4/9c/fe/f49cfec780b11c75f22d1bf08411f1fc.jpg',
    name:'linga'
},
{
    image_url:'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/03/12/Thalapathy-vijay-s-Master-movie-Telugu-and-Kannada-First-look-posters-.jpg?fit=1349%2C2048&quality=80&zoom=1&ssl=1',
    name:'master'
},
{
    image_url:'https://teluguone.com/photos/uploadsExt/uploads/A%20Aa%20Movie%20Wallpapers/A%20Aa%20Movie%20Posters/A_Aa_Movie_Posters1_small.jpg',
    name:'aa'
},
{
    image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs4AG9tqbg8-mUxWJnuereYzf-7x7GEhTUAA&s',
    name:'chalo'
},
{
    image_url:'https://img.nowrunning.com/content/movie/2018/lover-14716/bg.jpg',
    name:'lover'
},
{
    image_url:'https://thetelugufilmnagar.com/storage/2022/11/Japan-First-look-534x462.webp',
    name:'japan'
},
{
    image_url:'https://st1.latestly.com/wp-content/uploads/2020/08/1-7-5.jpg',
    name:'acharya'
},
{
    image_url:'https://content.tupaki.com/twdata/2018/1118/photos/movies/Diwali%20Special%20Posters%20in%20Upcoming%20Telugu%20Films/normal/Diwali%20Special%20Posters%20in%20Upcoming%20Telugu%20Films_15.jpg',
    name:'mrmajnu'
},
{
    image_url:'https://www.attapur.in/wp-content/uploads/2016/08/100-days-of-Love-Telugu-Movie-Release-date-Posters-3.jpg',
    name:'100%love'
},
{
    image_url:'https://live.staticflickr.com/3663/3437059097_377dc20df3_b.jpg',
    name:'billa'
},
{
    image_url:'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00310216-yyucvmkrwl-portrait.jpg',
    name:'devera'
},
{
    image_url:'https://i.pinimg.com/736x/8e/60/5f/8e605feff74ec94537d5c273a1d20a18.jpg',
    name:'patas'
},
{
    image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyCo9Ki3tNk_W7ChiAjD9LiyLogt1asEssA&s',
    name:'romance'
},
{
    image_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbGvtC7vVKIlZ8zRIV8MqLCiflDGY0lxRDQ&s',
    name:'jersey'
},
{
    image_url:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/allu-arjun-072241749-16x9_0.jpg?VersionId=K_n8YW.C2E4R3xdcdF74eB_BV9dtRyed',
    name:'pushpa'
}
















]
const Movies = () => {

  return (
  <section>
 <Row className='grid'>
 {moviedata.map((eachmovie)=>{
    return(
       <div className='col' >
        <div >
        <img src={eachmovie.image_url} alt='movieName' width={'350px'} height={'450px'} className='movieimage'></img>
        <h4 className='movietext'>{eachmovie.name}</h4>
        </div>
           
        </div>
   
    )
 })}
 </Row>
  </section>
  )
}

export default Movies