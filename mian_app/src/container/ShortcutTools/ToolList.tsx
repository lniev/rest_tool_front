import json from "../../assets/img/tools/json.png";
import JsonFormat from "../JsonFormat/JsonFormat.container";

const ToolList = [{
  title: 'JSON Format',
  type: 'jsonFormat',
  label: 'JSON格式化',
  icon: () => {
    return <img src={json}/>
  },
  content: () => {
    return (<JsonFormat/>)
  }
}]

export default ToolList