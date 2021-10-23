

import { message } from 'antd';

export function getRandomColor(){
  return "#" + ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6);
}

export function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('Only upload pictures!');
  }
  const isLt2M = file.size / 48 / 48 < 2;
  if (!isLt2M) {
    message.error('The picture must be less than 48KB!');
  }
  return isJPG && isLt2M;
}