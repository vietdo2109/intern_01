import { Flex, Text } from '@chakra-ui/react';
import { ResponsiveLine } from '@nivo/line';
import { lineData } from './lineGraphData';
import { whiteColor, grayColor, darkColor } from '../../../constants/colors';

export default function LineGraph() {
  return (
    <Flex
      w={'60%'}
      h={'455px'}
      bg={whiteColor}
      paddingX={'21px'}
      paddingY={'28px'}
      borderRadius={'15px'}
      flexDir={'column'}
    >
      <Flex flexDir={'column'}>
        <Text fontWeight={700} fontSize={'18px'} color={darkColor}>
          Sales overview
        </Text>
        <Flex gap={'5px'}>
          <Text fontSize={'14px'} fontWeight={700} color={'green'}>
            (+5) more
          </Text>
          <Text fontSize={'14px'} fontWeight={400} color={grayColor}>
            in 2024
          </Text>
        </Flex>
      </Flex>

      <ResponsiveLine
        data={lineData}
        colors={['#4FD1C5', '#2D3748']}
        margin={{ top: 50, right: 22.5, bottom: 50, left: 60 }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 500,

          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,

          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: 5,

          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        enableGridX={false}
        enableGridY={true}
        lineWidth={4}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        //   pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        enableArea={true}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[]}
      />
    </Flex>
  );
}
