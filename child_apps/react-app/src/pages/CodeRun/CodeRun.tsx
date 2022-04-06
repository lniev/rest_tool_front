import { memo, useState, useEffect, FC, useRef } from 'react';
import Editor from '@monaco-editor/react';
import styles from './styles.module.css';
import { Button, Tabs } from 'antd';
import { HtmlTemp, CssTmp, JsTmp } from './defaultTemplate';

const { TabPane } = Tabs;

interface IProps {}

const CodeRunPage: FC<IProps> = () => {
  const [] = useState();
  const editorRef = useRef(null);
  const preView = useRef<HTMLDivElement | null>(null);
  const [scriptContent, setScriptContent] = useState();
  useEffect(() => {}, []);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    // console.log(editorRef.current.getValue());
    // preView.current.innerHTML = editorRef.current.getValue()
    setScriptContent(editorRef.current.getValue());
    const script = document.createElement('script');
    // script.src = "https://use.typekit.net/foobar.js";
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML;
    // preView.current.appendChild();
    // console.log( )
  }

  return (
    <div style={{ display: 'flex' }}>
      <div className={styles.codeRun}>
        <Button type="primary" onClick={showValue} loading={false}>
          value
        </Button>
        <Button type="primary" loading={false}>Primary Button</Button>
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="😏&nbsp;HTML" key="HTML">
            <Editor onMount={handleEditorDidMount} height="85vh" defaultLanguage="html" defaultValue={HtmlTemp} />
          </TabPane>
          {/*<TabPane tab="😥&nbsp;CSS" key="CSS">*/}
          {/*  <Editor onMount={handleEditorDidMount} height="85vh" defaultLanguage="css" defaultValue={CssTmp} />*/}
          {/*</TabPane>*/}
          {/*<TabPane tab="😭&nbsp;JS" key="JS">*/}
          {/*  <Editor onMount={handleEditorDidMount} height="85vh" defaultLanguage="javascript" defaultValue={JsTmp} />*/}
          {/*</TabPane>*/}
        </Tabs>
      </div>
      <div className={styles.preView} ref={preView} dangerouslySetInnerHTML={{ __html: scriptContent }}>
        {/*<script dangerouslySetInnerHTML={{__html: 'try{Typekit.load({ async: true });}catch(e){}'}}></script>*/}
      </div>
    </div>
  );
};
export default CodeRunPage;
