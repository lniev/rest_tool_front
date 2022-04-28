import json from '../../assets/img/tools/json.png';
import JsonFormat from '../JsonFormat/JsonFormat.container';
import Base64 from '../Base64/Base64.container';
import base64 from '../../assets/img/tools/base64.png'

const ToolList = [
  {
    title: 'JSON Format',
    type: 'jsonFormat',
    label: 'JSON格式化',
    resizeProps: {
      defaultSize: {
        width: 600,
        height: 900,
      },
    },
    icon: () => {
      return <img src={json} />;
    },
    content: () => {
      return <JsonFormat />;
    },
  },
  {
    title: '图片Base64编码',
    type: 'base64编码',
    label: '图片转base64',
    resizeProps: {
      defaultSize: {
        width: 600,
        height: 740,
      },
    },
    icon: () => {
      return <img src={base64} />;
    },
    content: () => {
      return <Base64 />;
    },
  },
];

export default ToolList