import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
import './First.css'

function First(Props) {


const [card, setCard] = useState(
  [
{
  title:"Abrar Ahmad, Mohammad Ali get maiden call-ups for England Tests; Fawad, Hasan, yasir dropped",
  description: "Shaheen shah Afridi is not fit and availible for selection yet."
},
{
  title:"Shaheen 'feeling better' after undergoing appendectomy",
  description: "He is also currently undergoing a two-week rehab for his knee injury"
},
{
  title:"Shaheen 'feeling better' after undergoing appendectomy",
  description: "He is also currently undergoing a two-week rehab for his knee injury"
},
{
  title:"Shaheen 'feeling better' after undergoing appendectomy",
  description: "He is also currently undergoing a two-week rehab for his knee injury"
},




  ]
)










const [score,setScore] = useState(
  [
{country1:"Sindh",country2:"balochistan", Runs:"398/5"},

{country1:"Southern Punjab",country2:"Central Punjab", Runs:"38/3"},

{country1:"Northern(Pakistan)", country2:"Khyber pukhtunkhwa", Runs:"3/1",Runs:"390/5"},



  ]
)


const [scoree,setScoree] = useState(
  [
{country1:"England", Runs1:"398/5", country2:"Englan Lions", Runs2:"398/5"},

{country1:"Indea", Runs1:"38/3", country2:"New zealand", Runs2:"38/3"},





  ]
)




const remove=(id)=>{
  var newList = score.filter((scr)=> scr!=id);
setScore(newList);
}


const handleDelete= (id) => {
  var newThing = card.filter((value) => value!=id);
  setCard(newThing);
}






















    return ( 
<div>
<div id="navbar">
{/* navbar */}
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Cricinfo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Live Scores
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Live Scores Home</a></li>
            <li><a class="dropdown-item" href="#">Results</a></li>
            
            <li><a class="dropdown-item" href="#">Season view</a></li>
              
            <li><a class="dropdown-item" href="#">Descktop Scoreboard</a></li>
              
            <li><a class="dropdown-item" href="#">Scheduale</a></li>
              
            <li><a class="dropdown-item" href="#">Month view</a></li>
              
            <li><a class="dropdown-item" href="#">International Calender</a></li>
          </ul>
        </li>



        
       
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Series</a>
        </li>



        <li id="Tms">
          <a class="nav-link " href="#"   aria-expanded="true">
            Live Scores
          </a>
          <ul class="dropdown-menu"  id="teams">
            <li><a class="dropdown-item" href="#">Afghanistan</a></li>
            <li><a class="dropdown-item" href="#">Pakistan</a></li>
            
            <li><a class="dropdown-item" href="#">India</a></li>
              
            <li><a class="dropdown-item" href="#">New Zealand</a></li>
              
            <li><a class="dropdown-item" href="#">Irland</a></li>
              
            <li><a class="dropdown-item" href="#">Africa</a></li>
              
            <li><a class="dropdown-item" href="#">Brazil</a></li>
          </ul>
        </li>










        <li class="nav-item">
    
          <a class="nav-link" href="#">News</a>
         
        </li>
        <li class="nav-item">
    
    <a class="nav-link" href="#">Features</a>
   
  </li>
  <li class="nav-item">
    
    <a class="nav-link" href="#">Videos</a>
   
  </li>
  <li class="nav-item">
    
    <a class="nav-link" href="#">Stats</a>
   
  </li>
        
      
      </ul>



      <ul class="navbar-nav me-0 mb-2 mb-lg-0">
    
       
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Edition PK</a>
        </li>
        <li class="nav-item">
    
    <a class="nav-link" href="#">
    
      
    <i class="bi bi-moon-fill"></i>

        </a>
        
   
  </li>
        <li class="nav-item">
    
          <a class="nav-link" href="#">
          <i class="bi bi-bell-fill"></i>
          </a>
         
        </li>
        <li class="nav-item">
    
    <a class="nav-link" href="#">
    <i class="bi bi-grid-3x3-gap-fill"></i>
    </a>
   
  </li>
        <li class="nav-item">
    
    <a class="nav-link" href="#">
    <i class="bi bi-search"></i>
    </a>
   
  </li>
 
        
      
      </ul>

    </div>
  </div>
</nav>
</div>



































    {/* bootstrap grid */}
<div class="container-fluid ">
  <div class="row ">
 {/* right side bar */}
    <div class="col-3 my-3">

   
      {
        scoree.map((scr)=>{
          return(
            <>
            <p style={{color:"red"}}>Stumps</p>
            <h5>{scr.country1} <span style={{float:"right"}}>{scr.Runs1}</span> </h5>
            <h5>{scr.country2} <span style={{float:"right"}}>{scr.Runs2}</span></h5>
            <p>Match in progress  

            </p>
<hr/>

            </>
          )
         
        })
      }      



      
       


      </div>
      {/* leftsidebar */}
{/* <div id="divforleftsidebar">
<h6>Quick Links</h6>
<hr></hr>
<ul>
    <li>
    <Link to="/Routing"   > T20 Timeout</Link>

    </li>
<li>
<Link to="./Routing"   > T20 Time Out</Link>
</li>
<li>
<Link to="./Routing"   > Fantasy Pick</Link>
</li>
<li>
<Link to="./Routing"   > IIC Rankings</Link>
</li>




</ul>

</div>




<div id="divforleftsidebar">
<h6>ESPNcricinfo Apps</h6>
<hr></hr>
<ul>
    <li>
    <Link to="./Routing"   > Andriod App</Link>

    </li>
<li>
<Link to="./Routing"   > iOS App</Link>
</li>
</ul>

</div>





<div id="divforleftsidebar">
<h6>Follow ESPN cricinfo</h6>
<hr></hr>
<ul>
    <li>
    <Link to="./Routing"   > Inatagram</Link>

    </li>
<li>
<Link to="./Routing"   > Twitter</Link>
</li>
<li>
<Link to="./Routing"   > Facebook</Link>
</li>
<li>
<Link to="./Routing"   > Youtube</Link>
</li>




</ul>

</div>





<div id="divforleftsidebar">
<h6>ESPN Sites</h6>
<hr></hr>
<ul>
    <li>
    <Link to="./Routing"   >The cricket Monthly</Link>

    </li>
<li>
<Link to="./Routing"   > ESPN</Link>
</li>
</ul>

</div>



      
    </div> */}



    {/* center */}
    <div class="col-4 my-4">
      



    <div class="card">

      
  
  <div class="card-body">{
    card.map((value)=>
    {
      return(
<>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZFXwDvhATpeiB1S6qiVGCcJm8Ud8Gi1aiIA&usqp=CAU" class="card-img-top" alt="..."/>



<h5 class="card-title">{value.title}</h5>
    <p class="card-text">{value.description}</p>
    <button onClick={()=> handleDelete(value)}>D</button>
    
    


</>

      )

    })
  }



 
   
  </div>
</div>

































    </div>




    {/* Right side bar */}
    <div class="col my-4">
      <div id="divforrightsidebar">
        <h5>Qued-E-Azam Trophy</h5>
      <hr/>
      {
        score.map((scr)=>{
          return(
            <>
            <p style={{color:"red"}}>NOT COVERED LIVE</p>
            <h5>{scr.country1} <span style={{float:"right"}}>{scr.Runs}</span> </h5>
            <h5>{scr.country2}</h5>
            <p>Match in progress <span style={{float:"right"}}>  

            <button class="btn btn-danger" onClick={()=> remove(scr)}>
              
            <i class="bi bi-trash-fill bg-danger"></i>
              </button></span> </p>
<hr/>

            </>
          )
         
        })
      }      



      
       
       


      </div>
    </div>
  </div>
</div>










{/* footer */}

<div id="footer">
<div class="container">
  <div class="row">
    <div class="col">
      <h5>Key Series</h5>
      <hr/>
      <p>Austerlia VS England</p>
      <p>Afghanistan VS India</p>
      <p>India VS Pakistan</p>
      <p>New Zealand VS India</p>
      <p>Sri lanka VS Afghanistan</p>
      <p>Austerlia Vs west indies</p>
      <p>Irland vs pakistan</p>
      <Link to="./Routing">QUE Trophy</Link>
      <p>Women WBBL</p>
      <p>Marsh cup</p>
      <p>Women championship</p>
      <p>World cup Super league</p>
      
    </div>
    <div class="col">
    <h5>Quick Links</h5>
<hr></hr>

  
    <p> T20 Timeout</p>

  

<p > T20 Time Out</p>


<p> Fantasy Pick</p>

<p > IIC Rankings</p>






    </div>
    <div class="col">
    <h5>ESPNcricinfo Apps</h5>
<hr></hr>

    <p > Andriod App</p>

    
    <Link to="./Routing">IOS App</Link>

    </div>
    <div class="col">

    <h5>Follow ESPN cricinfo</h5>
<hr></hr>

    <p  > {Props.name}</p>

    
<p > Twitter</p>

<p  > Facebook</p>

<p  > Youtube</p>



      
    </div>
    <div class="col">
    <h5>ESPN Sites</h5>
<hr></hr>

    <p>The cricket Monthly</p>

<p > ESPN</p>

    </div>
  </div>
</div>



</div>
<nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <div class="container-fluid">
    <p>Terms of use| Privacy policy| Interst-Based Ads| Feedback</p>
    <p>@2022 ESPN Sports Media Ltd. All Rights reserved.</p>
    </div></nav>



  

    </div>

     );
}

export default First;