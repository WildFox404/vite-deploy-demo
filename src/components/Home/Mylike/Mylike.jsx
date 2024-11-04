
import ReactECharts from 'echarts-for-react';
const RadarChart = ({ indicators, data, name }) => {
  // 雷达图的配置项
  const option = {
      radar: {
          indicator: indicators, // 使用传入的 indicators
      },
      series: [{
          type: 'radar',
          data: [
              {
                  value: data,
                  name: name, // 使用传入的 name
                  itemStyle: {
                      color: 'rgba(0, 255, 255, 1)', // 设置数据项颜色为白色
                  },
              }
          ]
      }],
  };

  return (
      <div style={{ width: '100%', height: '100%'}}>
          <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
      </div>
  );
};
const Mylike = () => {

    // 第一个雷达图的数据和指标
  const radarData1 = [80, 80, 90, 30, 40,30,10];
  const radarIndicators1 = [
      { name: 'Drama', max: 100 },
      { name: 'Comedy', max: 100 },
      { name: 'Animation', max: 100 },
      { name: 'Fantasy', max: 100 },
      { name: 'Action', max: 100 },
      { name: 'Science Fiction', max: 100 },
      { name: 'Romance', max: 100 },
  ];
  const radarName1 = ''; // 第一个雷达图的名称

  // 第二个雷达图的数据和指标
  const radarData2 = [60, 80, 30, 80, 60,90,90];
  const radarIndicators2 = [
      { name: 'Rock', max: 100 },
      { name: 'Pop', max: 100 },
      { name: 'Folk', max: 100 },
      { name: 'Electronic', max: 100 },
      { name: 'R&B', max: 100 },
      { name: 'Jazz', max: 100 },
      { name: 'Funk', max: 100 },
  ];
  const radarName2 = ''; // 第二个雷达图的名称

    return (
        <div className='w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-4 overflow-x-hidden' style={{opacity:1,transform: 'none'}}>
            <div className="flex flex-col lg:flex-row xl:flex-nowrap gap-6 mt-6">
                <div className="bg-custom-bg text-gray-50 white-shadow rounded-3xl p-6  w-full lg:w-1/2 flex-1">
                    <div className="text-4xl">Movie</div>
                    <div className="mb-4">That statics of movies i have watched</div>
                    <div className="h-[250px]">
                        <RadarChart indicators={radarIndicators1} name={radarName1} data={radarData1} />            
                    </div>
                </div>
                <div className="bg-custom-bg text-gray-50 white-shadow rounded-3xl p-6  w-full lg:w-1/2 flex-1">
                    <div className="text-4xl">Album</div>
                    <div className="mb-4">The statistics of Music Albums I have listened</div>
                    <div className="h-[250px]">
                        <RadarChart indicators={radarIndicators2} name={radarName2} data={radarData2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mylike;