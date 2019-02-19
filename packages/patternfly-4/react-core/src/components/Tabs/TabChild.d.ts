import { FunctionComponent, HTMLProps } from 'react';

export interface TabChildProps extends HTMLProps<HTMLDivElement> {
  eventKey: number,
  id: string;
}

declare const TabChild: FunctionComponent<TabChildProps>;

export default TabChild;
