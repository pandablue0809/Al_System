/**
 * @author Tahara Kazuki
 * @created 03/22/2024
 * @lastModified 03/22/2024
 */
import { ReactNode } from 'react';

export type WithChildrenProps<T = undefined> = T extends undefined
  ? {
      children?: ReactNode;
    }
  : T & {
      children?: ReactNode;
    };
