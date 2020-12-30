import React from 'react';
import InfoCardCarousel from 'components/organisms/infoCardCarousel';
import { Container } from 'react-bootstrap';
import CenterCarousel from 'components/organisms/CenterCarousel';
import SvgClick from 'components/templates/SvgClick';
const Home: React.FC = () => (
    <div>
        {/* <div id="map" style={{width:'500px',height:'300px'}}/> */}
        <div id="content">Hello world!</div>
        <Container>
            <InfoCardCarousel />
            <br/>
            <br/>
            <CenterCarousel/>
        </Container>
            <br/>
            <br/>
            <Container>
            <div style={{width:'100%'}}>
            <SvgClick/>
            </div>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
    </div>
)
export default Home;