import { Outlet } from 'react-router-dom';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard' >
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar style={{position:'relative', zIndex:'1'}} />
          <div className='dashboard-page' style={{position:'static', zIndex:'0'}} >
            <Outlet  />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
