import AreaChart from '@/components/AreaChart';
import SemiCircleCharts from '@/components/SemiCircleChart';

const Main = () => {
  const tmp = 37;
  return (
    <div>
      <SemiCircleCharts num={tmp} />
      <AreaChart />
    </div>
  );
};

export default Main;
