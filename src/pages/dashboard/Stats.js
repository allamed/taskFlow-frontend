import { useEffect } from "react";
//import { StatsContainer, Loading, ChartsContainer } from '../../components';
import { useDispatch, useSelector } from "react-redux";
import { getUserImage } from "../../features/user/userSlice";
//import { showStats } from '../../features/allJobs/allJobsSlice';

const Stats = () => {
  /* const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
*/
  //const dispatch = useDispatch();

  return (
    <>
      {/* <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />} */}
      <h1>Stats</h1>
    </>
  );
};
export default Stats;
