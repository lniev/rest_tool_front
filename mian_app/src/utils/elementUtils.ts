import {useEffect} from "react";

/**
 * 图片文件dataUrl转成img并插入容器中
 * @param filer
 * @param callback
 */
export const dataUrlToImg = (filer: Blob, callback?: (result: string) => void) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(filer)
  fileReader.onload = () => {
    callback && callback(fileReader.result as string)
  }
}

/**
 * 在使用一些拖拽事件是处理默认行为
 */
export const usePreHandleDrag = () => {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    //阻止 document.ondrop的默认行为   不然会在新窗口中打开拖进的图片
    document.addEventListener('drop', preventDefault);
    //只有在ondragover中阻止默认行为才能触发 ondrop 而不是 ondragleave
    document.addEventListener('dragover', preventDefault);
    return () => {
      document.removeEventListener('drop', preventDefault);
      document.removeEventListener('dragover', preventDefault);
    };
  })
}
