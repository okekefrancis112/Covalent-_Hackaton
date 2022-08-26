import React, { Fragment, useEffect } from 'react'
import SentimentAnalysisChart from './chart/SentimentAnalysisChart'
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import { PieChart } from './nchart.js/pie'
import AOS from "aos";

const Jumbotron = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <Fragment>
        
        <div className="jumbotron-container">
            <div data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500"
             className="left">
                
                <h2>CoinDAO Provides Quality Analytics on DAO</h2>
                <p>CoinDAO is your one stop destination for systematic analytical data on any DAO and on any BLOCKCHAIN.</p>
                <div className="social-icon">
                    <a href="">
                        <BsFacebook className='search-icon-banner' color='#242424' />
                    </a>
                    <a href="">
                        <AiFillTwitterCircle className='search-icon-banner' color='#242424' />
                    </a>
                    <a href="">
                        <FaDiscord className='search-icon-banner' color='#242424' />
                    </a>
                </div>
            </div>
            <div 
                 data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                className="right">
                <PieChart />
            </div>
        
        </div>


        
    </Fragment>
  )
}

export default Jumbotron