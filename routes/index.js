var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let phone=[{
    name:"Samsung Galaxy F13",
    Category:'Mobile',
    description:'FHD+ Display 6000 mAh battery  Auto Data Switching',
    image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e135flbgins/gallery/in-galaxy-f13-sm-e135flbgins-532859063?$1300_1038_PNG$",

  },
  {
    name:'REdmi note 10 pro max',
    Category:'Mobile',
    description:"The Redmi Note 10 Pro Max (review) is the only camera in this segment to feature a 108MP main sensor.",
    image:"https://images.news18.com/ibnlive/uploads/2021/05/1620542541_redmi_note_10_pro.jpg?impolicy=website&width=510&height=356"

  },
  {
    name:"I phone 14 pro",
    Category:'Mobile',
    description:"iPhone 14 Pro. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. And get peace of mind with groundbreaking safety features.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSui55jKaISsqs3ERjci7bxVnEDsAAeJt3FmA&usqp=CAU"

  },
  {
    name:"Nokia G400 5G",
    Category:'Mobile',
    description:"This one is for those demanding the most from their smartphone. Nokia G400 5G comes with 1080p Full HD+ display with 120 Hz, and a spectacular triple-rear camera with a 48 MP main sensor and A.I. enhancements.",
    image:"https://images.ctfassets.net/wcfotm6rrl7u/12a714nWkun6w1DYEy1Fzt/c56a5589d7659b3b86151badeb9acda0/nokia-G400_5G-color-meteor_grey-us.png?w=401&h=401&fm=avif&f=left&fit=pad&q=88"

  }]

  res.render('index', {phone});
});

module.exports = router;
