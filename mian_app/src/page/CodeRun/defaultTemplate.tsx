import { BorderOutlined, CodeSandboxOutlined, ThunderboltOutlined } from '@ant-design/icons';
import jsRunIcon from '../../assets/img/codeRun/jsrun.png';
function Img(props) {
  return <img src={props.src} alt="jsrun" style={{ height: '14px', marginRight: 8 }} />;
}
const tools = [
  {
    name: 'jsrun',
    url: 'https://jsrun.net/new',
    icon: <Img src={jsRunIcon} />,
  },
  {
    name: 'codeRun',
    url: 'https://wanglin2.github.io/code-run-online/#/',
    icon: <></>,
  },
  {
    name: 'codesandbox',
    url: 'https://codesandbox.io/s/',
    icon: <CodeSandboxOutlined />,
  },
  {
    name: 'stackblitz',
    url: 'https://stackblitz.com/fork/react',
    icon: <ThunderboltOutlined />,
  },
];

export default tools;
