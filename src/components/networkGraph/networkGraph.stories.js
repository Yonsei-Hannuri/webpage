import NetworkGraph from './networkGraph';

const meta = {
  title: 'Network Graph',
  component: NetworkGraph,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

export const Basic = {
  args: {
    nodes: [
      {
        id: 1,
        name: 'A',
      },
      {
        id: 2,
        name: 'B',
      },
      {
        id: 3,
        name: 'C',
      },
      {
        id: 4,
        name: 'D',
      },
      {
        id: 5,
        name: 'E',
      },
      {
        id: 6,
        name: 'F',
      },
      {
        id: 7,
        name: 'G',
      },
      {
        id: 8,
        name: 'H',
      },
      {
        id: 9,
        name: 'I',
      },
      {
        id: 10,
        name: 'J',
      },
    ],
    edges: [
      {
        source: 1,
        target: 2,
      },
      {
        source: 1,
        target: 5,
      },
      {
        source: 1,
        target: 6,
      },

      {
        source: 2,
        target: 3,
      },
      {
        source: 2,
        target: 7,
      },
      {
        source: 3,
        target: 4,
      },
      {
        source: 8,
        target: 3,
      },
      {
        source: 4,
        target: 5,
      },
      {
        source: 4,
        target: 9,
      },
      {
        source: 5,
        target: 10,
      },
    ],
    width: 500,
    height: 500,
    margin: {
      top: 100,
      bottom: 100,
      left: 100,
      right: 100,
    },
  },
};
