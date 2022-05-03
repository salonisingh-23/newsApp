import React, { useEffect,useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
// import logo from './images/logo.png';
import useStyles from './styles';

const alanKey='d29f194feb356f92c4bf29ea6e2d31852e956eca572e1d8b807a3e2338fdd0dc/stage';

const App=()=> {
  const [newsArticles, setNewsArticles]=useState([]);
 const [activeArticle, setActiveArticle]=useState(-1);
  const classes=useStyles();

  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand: ({command,articles})=>{
        if(command ==='newHeadlines')
        {
          setNewsArticles(articles);
          setActiveArticle(-1);
        }
        else if(command==='highlight')
        { 
          setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);
        }
      }
    })
  },[])
  return(
    <div>
    <div className={classes.logoContainer}>
      <img src="" className={classes.alanLogo} alt="alan logo"/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>

 
  
  );
  }
export default App;