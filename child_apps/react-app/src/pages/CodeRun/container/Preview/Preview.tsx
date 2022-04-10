// @ts-nocheck
import { memo, useState, useEffect, FC, useRef } from 'react';
import consoleScript from './console.min.js';

const container = document.createElement('div');

class CodePreview extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'close' });
    container.setAttribute('id', 'codePreview');
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.backgroundColor = '#fff';
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = `console.log(document.getElementById('codePreview') || 'none')`;
    // require('../../../../utils/console.min.js');
    shadow.append(container, script);
  }
}
window.customElements.define('code-preview', CodePreview);

export interface PreviewContentProps {
  html: string;
  css: string;
  script: HTMLScriptElement;
}

const PreviewContainer: FC<Partial<PreviewContentProps>> = (props) => {
  const iframeRef = useRef<HTMLIFrameElement>();
  const { html = '', css = '', script } = props;
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.document.body.innerHTML = css + html;
    }
  }, [html, css]);
  useEffect(() => {
    if (script && iframeRef.current) {
      const scriptEle = document.createElement('script');
      scriptEle.async = true;
      scriptEle.type = 'text/javascript';
      scriptEle.innerHTML = script;
      iframeRef.current.contentWindow.document.body.appendChild(scriptEle);
    }
  }, [script]);

  useEffect(() => {
    if (iframeRef.current) {
      const scriptEle = document.createElement('script');
      scriptEle.async = true;
      scriptEle.type = 'text/javascript';
      scriptEle.src = 'https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js';
      iframeRef.current.contentWindow.document.head.appendChild(scriptEle);
    }
  }, []);

  return (
    <>
      {/* <code-preview style={{ flex: 1 }} /> */}
    </>
  );
};

export default PreviewContainer;
