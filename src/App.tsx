import './App.css';
import styled from 'styled-components';
import {AsideNav} from "./layout/asides/AsideNav";
import {AsideProfile} from "./layout/asides/AsideProfile";
import {Main} from "./layout/sections/main/Main";
import {Services} from "./layout/sections/services/Services";
import {FlexWrapper} from "./components/FlexWrapper";
import {Prices} from "./layout/sections/prices/Prices";
import {Recommendations} from "./layout/sections/recommendations/Recommendations";
import {Education} from "./layout/sections/education/Education";
import {WorkHistory} from "./layout/sections/workHistory/WorkHistory";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Blog} from "./layout/sections/blog/Blog";


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