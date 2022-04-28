import { FC, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import styles from './Base64.module.scss';
import { dataUrlToImg, usePreHandleDrag } from '../../utils/elementUtils';
import copy from 'copy-to-clipboard';
import { Button, Input } from 'antd';

const { TextArea } = Input;

interface IProps {}

const Base64Container: FC<IProps> = () => {
  const [base64, setBase64] = useState<string>('');
  const [isClear, setIsClear] = useState<boolean>(true);
  const [imgSrc, setImgSrc] = useState<string>('');
  usePreHandleDrag();

  /**
   * 处理文件被拖拽入容器
   * @param e
   */
  const onDrop = (e) => {
    const dropFile = e.dataTransfer.files[0]
    if(dropFile?.type.indexOf('image') === -1) return
    dataUrlToImg(e.dataTransfer.files[0], (result) => {
      setBase64(result);
      setImgSrc(result)
      setIsClear(false);
    });
  };

  /**
   * 复制转换后的base64
   */
  function copyBase64() {
    copy(base64);
  }

  /**
   * 图片转base64
   */
  function revertToImg() {
    setImgSrc(base64)
    setIsClear(false)
  }

  /**
   * 处理编辑base64
   * @param e
   */
  function handleBase64Change(e) {
    setBase64(e.currentTarget.value)
  }

  /**
   * 提示
   * @constructor
   */
  const Hint = () => {
    if (isClear)
      return (
        <>
          <UploadOutlined />
          <span>选择或者将图片拖拽至此处</span>
        </>
      );
    return null;
  };

  function clearImg() {
    setIsClear(true);
    setBase64('');
  }

  return (
    <div className={styles.base64}>
      <div className={styles.base64_dropArea} onDrop={onDrop}>
        {!isClear && <img src={imgSrc} alt="出错啦" />}
        {Hint()}
      </div>
      <div className={styles.base64_btnGroup}>
        <Button type="primary" onClick={revertToImg}>还原</Button>
        <Button onClick={clearImg}>清空</Button>
        <Button type="primary" onClick={copyBase64}>
          一键复制
        </Button>
      </div>
      <TextArea rows={13} value={base64} onChange={handleBase64Change} className={styles.base64_result} />
    </div>
  );
};
export default Base64Container;
