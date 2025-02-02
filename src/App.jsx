import { useState } from 'react'

import './App.css'
import  chatLogo from './assets/chatgpt.svg'
import addbtn from './assets/add-30.png'
import messageicon from './assets/message.svg'
import home from './assets/home.svg'
import rocket from './assets/rocket.svg'
import saved from './assets/bookmark.svg'
import sendbtn from './assets/send.svg'
import usericon from './assets/user-icon.png'
import gptlogo from './assets/chatgptLogo.svg'


function App() {
  const [img,setImg] = useState("");
  const [abt,setAbout] = useState("");
  const [val,setValue] = useState("");
  const [nm,setName] = useState(``);
  const[video,setVedio] = useState("");

const [api,setApi] = useState([{
name:"Ronaldo",
age:39,
about:"Ronaldo was one of the most well-known sports stars off the field, and numerous studies of athletes popularity showed that he was the most-beloved athlete in the world during his playing peak. His extreme popularity made Ronaldo one of the highest-paid endorsers in sports history, and in November 2016 he became the third person (after basketball superstars Michael Jordan and LeBron James) to earn a “lifetime” contract from the sportswear company Nike. Moreover, he established his own successful “CR7” brand of products that included shoes, underwear, and fragrances. Ronaldo’s immense marketability was at the center of a legal issue that arose in June 2017. That month prosecutors filed a lawsuit that accused Ronaldo of defrauding the Spanish government of €14.7 million ($16.5 million) by hiding his image-rights income in Spain from 2011 to 2014. He was accused of having underestimated the income he earned from the sale and licensing of his image rights and the accompanying tax obligations, but Ronaldo denied all allegations. However, in June 2018 he accepted a suspended two-year prison sentence and agreed to pay €18.8 million ($21.8 million) to the Spanish government to settle the case." ,
image:"https://wallpapers.com/images/high/cristiano-ronaldo-portugal-cool-dark-juventus-sb1ydwdxtwq4o2bj.webp",

},
{name:"Messi",
  age:37,
  about:`
  Born in Rosario, Argentina, in 1987, Lionel Messi is widely regarded as one of the greatest football players of all time, and his illustrious career proves why. The Argentinean footballer, who holds a record eight Ballon d'Or awards, has displayed his talent early on and has always been destined for greatness.

When Messi was 13 years old, he and his family moved to Barcelona, where the club assisted him in treating his growth hormone deficiency. He started playing for FC Barcelona's U14 team. The Argentinean quickly rose through the ranks, impressing everyone with exceptional skills and talent. At 17, he made his first senior appearance for the club and became a vital player for the Blaugranas.




  
  
  `
,
  image:"https://media.gettyimages.com/id/1765731858/photo/paris-france-lionel-messi-attends-the-67th-ballon-dor-ceremony-at-theatre-du-chatelet-on.jpg?s=612x612&w=0&k=20&c=pw6GycbQtVZRV-33K1ur3f6e9s7MuKSYIkF9zdOkxLo="
},
{name:"Kohli",
  age:37,
  about:`Virat Kohli (born November 5, 1988, Delhi, India) is an Indian international cricketer considered by many as one of the greatest batsmen in the history of the game. Kohli plays for (and previously captained) the Royal Challengers Bangalore (RCB) in the Indian Premier League (IPL). He is also a former captain of the Indian cricket team in all three international formats—Test cricket, one-day internationals (ODIs), and Twenty20 internationals (T20I)—making him one of India’s most successful captains.

Kohli has earned praise for his discipline and commitment from teammates, opponents, and cricket veterans alike. “He has changed the face of cricket and how you prepare for the game. The discipline that he has stands out, always,” cricketing great Brian Lara said of Kohli after Kohli was named Player of the Tournament for the 2023 Cricket World Cup.`,
  image:"data:image/jpeg;base64,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"
,
},
{name:"Neeraj",
  age:29,
  about:`At the Olympic Games Tokyo 2020 in 2021, Chopra entered the men's javelin competition amidst tough competition. Despite not being the outright favourite for gold, he led the qualifying round with an 86.65m throw, before dominating the final. He won gold with a throw of 87.58m and became his country's first track and field athlete to win gold at the Olympic stage.

My goal was always the Tokyo Olympics. I put in the hard work and trusted the process since every single effort counts when it comes to success at the highest level Chopra expressed after his record win.`,
  image:"data:image/jpeg;base64,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",
}


,



])

const genrateathleteidea = (val)=>{
console.log(val);
for(let i = 0;i<api.length;i++){
  if(val === api[i].name){
    setAbout(api[i].about);
    setImg(api[i].image);
    setName(`Hello i am ${api[i].name}`);
    break;
  }
}
}



  return (
   <div className='App'>
  
    <div className="sidebar">
<div className="upperside">
  <div className="uppersidetop">
    <div className="uparse">
    <img src={chatLogo} alt="" className='logo' /><span className="brand">AthleteGPT</span>
    </div>
    <button className='midbtn'><img src={addbtn} alt="" className='addbtn' />More Info</button>
  </div>
  <div className="uppersidebottom">
    <button className="query"><img src={messageicon} alt="" className='queryimg' />What is Programming?</button>
    <button className="query"><img src={messageicon} alt="" className='queryimg' />How to Use an API ?</button>
  </div>

</div>
<div className="lowerside">
<div className="listitems"><img src={home} className='listitemsimg'  alt='Home'/>Home</div>
<div className="listitems"><img src={saved} className='listitemsimg'alt='Saved' />Saved</div>
<div className="listitems"><img src={rocket} className='listitemsimg' alt='Upgrade' />Upgrade</div>
</div>
    </div>
    <div className="main">
  

<div className="chats">

<div className="chat">
  <img src={img} alt="" className='chatimg' />
  <p className="txt">
  {nm === "" ? "" : nm}
  </p>
</div>
<div className="chat bot">
  
  <p className="txt" >{abt}
    </p>
</div>

</div>
<div className="chatfooter">
  <div className="inp">
    <input type="text" placeholder='Send Message ...' value={val} onChange={(e)=>{setValue(e.target.value)}}   /><button className="send"><img src={sendbtn} alt="" onClick={()=>{genrateathleteidea(val)}} /></button>
  </div>
  <p>ChatGPT can only work for searches Messi, Neeraj, Kohli, Ronaldo and many more in count.....</p>
</div>

    </div>
    
   </div>


         
   
  )
}

export default App
