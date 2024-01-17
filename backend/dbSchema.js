const mongoose =require("mongoose")
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://raj_2514:Dv4EcDBfWHjRRETm@cluster0.zvycjgk.mongodb.net/")
const heroSchema = new Schema({
 Heroname:String,
 Description:String,
 src:String,
 Hp:String,
 id:Number
});
const Cards = mongoose.model('Cards', heroSchema);
// const users = [
//     {src:"src/assets/doc strange.jpeg",
//              Hp:"100",
//              Heroname:"Doctor strange",
//              Description:"Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.",
//              id:1
//             },
//             {src:"src/assets/doc strange.jpeg",
//              Hp:"100",
//              Heroname:"Doctor strange",
//              Description:"Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.",
//              id:2
//             },
//             {src:"src/assets/doc strange.jpeg",
//              Hp:"100",
//              Heroname:"Doctor strange",
//              Description:"Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.",
//              id:3
//             },
//             {src:"src/assets/doc strange.jpeg",
//              Hp:"100",
//              Heroname:"Doctor strange",
//              Description:"Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.",
//              id:4
//             },
//             {src:"src/assets/doc strange.jpeg",
//              Hp:"100",
//              Heroname:"Doctor strange",
//              Description:"Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.",
//              id:5
//             },
//             {src:"src/assets/doc strange.jpeg",
//              Hp:"100",
//              Heroname:"Doctor strange",
//              Description:"Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.",
//              id:6
//             },
//             {src:"src/assets/doc strange.jpeg",
//              Hp:"100",
//              Heroname:"Doctor strange",
//              Description:"Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.",
//              id:7
//             },
//             {src:"src/assets/doc strange.jpeg",
//              Hp:"100",
//              Heroname:"Doctor strange",
//              Description:"Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.",
//              id:8
//             },
//             {src:"src/assets/doc strange.jpeg",
//              Hp:"100",
//              Heroname:"Doctor strange",
//              Description:"Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.",
//              id:9
//             }
//   ];
  
//   Cards.create(users);
module.exports={
    Cards
}