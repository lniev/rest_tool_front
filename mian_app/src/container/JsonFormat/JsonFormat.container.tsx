// @ts-ignore
import { memo, useState, useEffect, FC, useRef, useDeferredValue } from 'react';
import JsonEditor from './JsonEditor';
import styles from './JsonFormat.module.scss';
import { Input, Button, message } from 'antd';

interface IProps {}

const schema = {
  title: 'Format Result',
  type: 'object',
  properties: {
    array: {
      type: 'array',
      items: {
        type: 'number',
      },
    },
    boolean: {
      type: 'boolean',
    },
    number: {
      type: 'number',
    },
  },
  required: ['array', 'string', 'boolean'],
};

const json = {
  array: [1, 2, 3],
  boolean: true,
  null: null,
  number: 'four',
  object: { a: 'b', c: 'd' },
  string: 'Hello World',
};

const modes = ['tree', 'form', 'view', 'code', 'text', 'preview'];
const JsonFormatContainer = () => {
  const [mode, setMode] = useState(modes[0]);
  const [text, setText] = useState(JSON.stringify(json, null, 2));
  const [result, setResult] = useState("{}");
  // const [defText, setDefText] = useDeferredValue(JSON.stringify(json, null, 2));
  const inputText = useRef('');

  function onModeChange(_mode: string) {
    setMode(_mode);
  }

  function onChangeText(_text: string) {
    setText(_text);
    setResult(_text)
  }

  function onInputChange(value) {
    setText(value)
  }

  function format() {
    try {
      const _parse = JSON.parse(text);
      setText(JSON.stringify(_parse, null, 2));
      setResult(JSON.stringify(_parse, null, 2));
      // setDefText(text)
    } catch (error) {
      message.error('请输入正确的json');
    }
  }
  return (
    <div className={styles.jsonFormat}>
      <div className={styles.contents}>
        <JsonEditor
          schema={schema}
          text={text}
          mode={'code'}
          search={false}
          indentation={4}
          enableTransform={false}
          onChangeText={onInputChange}
        />
        <div>
          <Button onClick={format} className={styles.confirm}>格式化</Button>
        </div>
        <JsonEditor
          schema={schema}
          text={result}
          mode={mode}
          modes={modes}
          search={true}
          indentation={4}
          onChangeText={onChangeText}
          onModeChange={onModeChange}
        />
      </div>
    </div>
  );
};

export default JsonFormatContainer;
