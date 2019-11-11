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

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );
    
    const Description = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
      <Block>
        {[
          {
            content:
              'Look at these important links below and find out more about the Boid Project.',
            image: `${baseUrl}img/socialHeader.png`,
            imageAlign: 'right',
            title: 'Usefull Stuff',
          },
        ]}
      </Block>

      </div>
    );

    const BoidSites = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Sites and channels</h2>
        <Button href="https://www.boid.com/" style='color:red'>Main boid.com</Button>
        <p><Button href="https://community.boid.com">Community</Button></p>
        <Button href="https://app.boid.com/">Web App</Button>
        <p><Button href="https://github.com/boid-com">Boid Github Account</Button></p>
        <Button href="https://everipedia.org/wiki/lang_en/boid-1">Everipedia Boid Site</Button>
        <p><Button href="https://www.youtube.com/channel/UCL4I3DksM41qPKih2PbiQ7g/featured">YouTube Channel</Button></p>
        <Button href="https://t.me/Boidcom_official">Telegram Channel</Button>            
        <p><Button href="https://bloks.io/account/boidcomtoken?loadContract=true&tab=Tables&account=boidcomtoken&scope=boidcomtoken&limit=100">Boid Token Contract Actions</Button></p>
      </div>
    );

    const StatisticsSites = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Stats</h2>
        <Button href="https://stats.boid.com/">Boid Statistics</Button>
        <p><Button href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">World Community Grid Stats</Button></p>
        <Button href="https://bloks.io/tokens/BOID-eos-boidcomtoken">BOID Highest Holders</Button>
        <p><Button href="https://bloks.io/account/boidworkfund">Work Fund Status</Button></p>
      </div>
    );

    return (
      <div>
        <Description />
        <BoidSites />
        <StatisticsSites />
      </div>
    );
  }
}

module.exports = Index;