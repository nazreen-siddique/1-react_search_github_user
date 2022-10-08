import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

const Dashboard = () => {
  const {loading} = React.useContext(GithubContext);
  if(loading){
   return <>
   <Navbar/> 
  <Search/> 
  <img src={loadingImage} alt="loading..."/>
   </>
   }
  return (
   <>
    <Navbar/>
    <Search/>
    <Info/>
    <User/>
    <Repos/>
   </>
  )
}

export default Dashboard;