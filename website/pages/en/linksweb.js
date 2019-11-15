/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;
    
    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    const Top = () => (
      
      <div
        className="boidsitesclass"
        style={
          {textAlign: 'center'},
          {maxWidth: '600px'}
          }>

        <table>
                <tr>
                  <td align='center'>
                      <img src='img/BOID_Official_QR.png' alt="Boid QR" />
                      <Button href="https://www.boid.com/" style='color:red'>Main boid.com</Button>
                  </td>
                  <td align='center'>
                      <img src='img/collaboratorsimg_small.png' alt="Community" />
                      <Button href="https://community.boid.com">Community</Button>
                  </td>
                  <td align='center'>
                      <img src='img/socialHeader.png' alt="Web App" />
                      <Button href="https://app.boid.com/">Web App</Button>
                  </td>
                  <td align='center'>
                      <img src='img/GitHub-Mark.png' alt="GitHub" />
                      <Button href="https://github.com/boid-com">Boid Github Account</Button>
                  </td>                  
              </tr>
       </table>
      </div>
    );

    const Middle = () => (
      <div
        className="statsclass"
        style={
          {textAlign: 'right'},
          {maxWidth: '600px'}
          }>
        	<table>
          <td align='center'>
                      <img src='img/Everipedia_logo.png' alt="Everipedia" />
                      <Button href="https://everipedia.org/wiki/lang_en/boid-1">Everipedia Boid Site</Button>
                  </td>
                  <td align='center'>
                      <img src='img/youtube.png' alt="Youtube" />
                      <Button href="https://www.youtube.com/channel/UCL4I3DksM41qPKih2PbiQ7g/featured">YouTube Channel</Button>
                  </td>
                  <td align='center'>
                      <img src='img/Telegram.jpg' alt="Telegram" />
                      <Button href="https://t.me/Boidcom_official">Telegram Channel</Button>
                      <a href="https://t.me/Boidcom_official">
                       <img src="https://img.shields.io/discord/431917998102675485.svg" alt="Telegram">
                       </img>
                      </a>
                  </td>
                  <td align='center'>
                      <img src='img/BOID-COIN.png' alt="Boid Token" />
                      <Button href="https://bloks.io/account/boidcomtoken?loadContract=true&tab=Actions&account=boidcomtoken">Boid Token Contract Actions</Button>
                  </td>
           </table>
            
               
      </div>
    );

    const Bottom = () => (
      <div
        className="statsclass"
        style={
          {textAlign: 'right'},
          {maxWidth: '600px'}
          }>
        	<table>
                <tr>
                  <td align='center'>
                      <img src='img/stats.jpg' alt="Boid QR" />
                      <Button href="https://stats.boid.com/">Boid Statistics</Button>
                  </td>
                  <td align='center'>
                      <img src='img/Boid_Common Cause-WEB.jpg' alt="WCG Stats" />
                      <Button href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">World Community Grid Stats</Button>                    
                  </td>
                  <td align='center'>
                      <img src='img/digital-currency-coins.png' alt="Holders" />
                      <Button href="https://bloks.io/tokens/BOID-eos-boidcomtoken">BOID Highest Holders</Button>
                  </td>         
                  <td>
                      <img src='img/work_fund.png' alt="Work Fund" />
                      <Button href="https://bloks.io/account/boidworkfund">Work Fund Status</Button>
                  </td>
                </tr>
           </table>
            
               
      </div>
    );

    return (
      <div align= 'center'>
        <Top/>
        <Middle/>
        <Bottom/>
      </div>
    );
  }
}

module.exports = Index;