import './App.css';
import styled from 'styled-components';
import {AsideNav} from "./layout/asides/asideNav/AsideNav";
import {AsideProfile} from "./layout/asides/asideProfile/AsideProfile";
import {Main} from "./layout/sections/main/Main";
import {Services} from "./layout/sections/services/Services";
import {FlexWrapper} from "./components/FlexWrapper";
import {Prices} from "./layout/sections/prices/Prices";
import {Recommendations} from "./layout/sections/recommendations/Recommendations";
import {Education} from "./layout/sections/education/Education";
import {WorkHistory} from "./layout/sections/workHistory/WorkHistory";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Blog} from "./layout/sections/blog/Blog";
import {Contact} from "./layout/sections/contact/Contact";
import {Map} from "./layout/sections/map/Map";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <StyledApp>
                <AsideProfile/>
                <FlexWrapper direction={'column'}>
                    <Main/>
                    <Services/>
                    <Prices/>
                    <Recommendations/>
                    <Education/>
                    <WorkHistory/>
                    <Portfolio/>
                    <Blog/>
                    <Contact/>
                    <Map/>
                    <Footer/>
                </FlexWrapper>
                <AsideNav/>
            </StyledApp>

        </div>
    );
}

export default App;

const StyledApp = styled.div`
  display: flex;
`