import { memo, useState, useEffect, FC, useRef } from 'react';
import styles from './styles.module.scss';
import { Button, Card, Switch, Tabs } from 'antd';
import tools from './defaultTemplate';
import { PreviewContentProps } from './container/Preview/Preview';
const TabPane = Tabs.TabPane;
interface IProps {}
const CodeRunPage: FC<IProps> = () => {
  return (
    <div className={styles.onlineRunCode}>
      <Tabs defaultActiveKey={tools[0].name} className={styles.toolBar}>
        {tools.map((tool) => {
          return (
            <TabPane
              tab={
                <>
                  {tool.icon}
                  {tool.name}
                </>
              }
              key={tool.name}
            >
              <iframe
                src={tool.url}
                width="100%"
                height="100%"
                frameBorder="0"
                sandbox="allow-scripts allow-same-origin allow-popups"
              ></iframe>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
export default CodeRunPage;
