import SemiCircleCharts from '@/components/SemiCircleChart';

const Main = () => {
  const tmp = 67;
  return (
    <div>
      <div>main page</div>
      <SemiCircleCharts num={tmp} />
    </div>
  );
};

export default Main;
