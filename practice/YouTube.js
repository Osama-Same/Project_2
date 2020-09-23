const videos = [
  {
    id: "7yLxxyzGiko",
    title: "Kittens walk with a tiny chicken",
    thumbnail: "https://img.youtube.com/vi/7yLxxyzGiko/maxresdefault.jpg",
  },
  {
    id: "rS6cvjFXg9s",
    title: "Cute kitten named Garfield washes its paws and prepares to sleep.",
    thumbnail: "https://img.youtube.com/vi/rS6cvjFXg9s/maxresdefault.jpg",
  },
  {
    id: "BFNekjEgvuk",
    title: "Kitten sleeps sweetly with the Chicken 🐥",
    thumbnail: "https://img.youtube.com/vi/BFNekjEgvuk/maxresdefault.jpg",
  },
  {
    id: "te1fHMaw4UY",
    title: "White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰",
    thumbnail: "https://img.youtube.com/vi/te1fHMaw4UY/maxresdefault.jpg",
  },
  {
    id: "MFyUZqSknvw",
    title: "Kittens meets and walk with a cute white bunny",
    thumbnail: "https://img.youtube.com/vi/MFyUZqSknvw/maxresdefault.jpg",
  },
  {
    id: "hlajmIPiphk",
    title: "Mom Cat playing and talking to her Cute Meowing baby Kittens",
    thumbnail: "https://img.youtube.com/vi/hlajmIPiphk/maxresdefault.jpg",
  },
  {
    id: "Cz47GimSxIc",
    title: "Funny Kitten wags its tail like a Puppy",
    thumbnail: "https://img.youtube.com/vi/Cz47GimSxIc/maxresdefault.jpg",
  },
  {
    id: "RmpuhbdnAfQ",
    title: "Kitty Coco and her Sleepy younger brother 🥰",
    thumbnail: "https://img.youtube.com/vi/RmpuhbdnAfQ/maxresdefault.jpg",
  },
];
const date =() => {
  document.getElementById("date").innerHTML = Date();
}
const img1 =()=> {
 let x= document.getElementById("image").src =videos[0].thumbnail;
}
const img2 =()=> {
  let x= document.getElementById("image").src =videos[1].thumbnail;
 }
 const img3 =()=> {
  let x= document.getElementById("image").src =videos[2].thumbnail;
 }
 const img4 =()=> {
  let x= document.getElementById("image").src =videos[3].thumbnail;
 }
 const img5 =()=> {
  let x= document.getElementById("image").src =videos[4].thumbnail;
 }
 const img6 =()=> {
  let x= document.getElementById("image").src =videos[5].thumbnail;
 }
 const img7 =()=> {
  let x= document.getElementById("image").src =videos[6].thumbnail;
 }
 const img8 =()=> {
  let x= document.getElementById("image").src =videos[7].thumbnail;
 }


$(document).ready(function(){
  $('.text1').click(function(){
    $(".text").text(videos[0].title);
    $(".text1").hide("200");
    $(".text1").show(function(){
      $(".text1").last().css("background-color", "yellow");
    });
  })
});
$(document).ready(function(){
  $('.text2').click(function(){
    $(".text").text(videos[1].title);
    $(".text2").hide("200");
    
  })
});
$(document).ready(function(){
  $('.text3').click(function(){
    $(".text").text(videos[2].title);
    $(".text3").hide('200');
  })
});
$(document).ready(function(){
  $('.text4').click(function(){
    $(".text").text(videos[3].title);
    $(".text4").hide('200');
  })
});
$(document).ready(function(){
  $('.text5').click(function(){
    $(".text").text(videos[4].title);
    $(".text5").hide('200');
  })
});
$(document).ready(function(){
  $('.text6').click(function(){
    $(".text").text(videos[5].title);
    $(".text6").hide('200');
  })
});
$(document).ready(function(){
  $('.text7').click(function(){
    $(".text").text(videos[6].title);
    $(".text7").hide('200');
  })
});
$(document).ready(function(){
  $('.text8').click(function(){
    $(".text").text(videos[7].title);
    $(".text8").hide('200');
  })
});

  
