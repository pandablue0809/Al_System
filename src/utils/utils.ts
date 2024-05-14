/**
 * @author Tahara Kazuki
 * @created 04/10/2024
 * @lastModified 04/29/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */

import { showToast } from '../components/common/ui-lib/uiLib';
import ChatConstant from '../constants/chatConstant';

export const trimTopic = (topic: string) => {
  return topic.replace(/[，。！？”“"、,.!?]*$/, '');
};

export const merge = (target: any, source: any) => {
  Object.keys(source).forEach(function (key) {
    if (source[key] && typeof source[key] === 'object') {
      merge((target[key] = target[key] || {}), source[key]);
      return;
    }
    target[key] = source[key];
  });
};

export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(ChatConstant.Copy.Success);
  } catch (error) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(ChatConstant.Copy.Success);
    } catch (error) {
      showToast(ChatConstant.Copy.Failed);
    }
    document.body.removeChild(textArea);
  }
}
