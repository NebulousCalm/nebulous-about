import Image from 'next/image';
import Head from 'next/head';

import quizImage from '../public/quizimg.svg'

export default function Index(){
  return(
    <main>
      <Head>
        <script defer src="https://kit.fontawesome.com/d13028e86d.js" crossorigin="anonymous"></script>    
      </Head>
      <div className="masked-copy texture-orange big-type">
        <h2>&lt; Nebulous /&gt;</h2><br/>
        <p>Developer <br/>UI/UX designer <br/>Expert microwave tech support</p>
        <div className="downarrow-container">
        <svg class="arrows">
					<path class="a1" d="M0 0 L30 32 L60 0"></path>
					<path class="a2" d="M0 20 L30 52 L60 20"></path>
					<path class="a3" d="M0 40 L30 72 L60 40"></path>
				</svg>
        </div>
      </div>

      <div className="progressbars">
        <h1 className="pgbrsTitle">What on <div className="masked-copy texture-orange big-type earth-custom">Earth</div> do I do??</h1>

        
        <span className="meter-title">CSS</span>
        <div className="meter">
	       <span style={{width:'55%'}}></span>
        </div>
        <span className="meter-title">Python</span>
        <div className="meter">
	        <span style={{width:'20%'}}></span>
        </div>
        <span className="meter-title">HTML</span>
        <div className="meter">
	       <span style={{width:'15%'}}></span>  
        </div>
        <span className="meter-title">Literally everything else..</span>
        <div className="meter">
	       <span style={{width:'10%'}}></span>  
        </div>
      </div>
      <div className="whatcanido">
        <h1 className="pgbrsTitle"><div className="masked-copy texture-orange big-type earth-custom">What</div> can I do?</h1> 

      </div>
    </main>
  );
}