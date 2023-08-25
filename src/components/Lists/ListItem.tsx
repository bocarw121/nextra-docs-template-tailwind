import { PropsWithChildren } from 'react';

export function ListItem({ children }: PropsWithChildren) {
  return <li className="mb-2 text-blue-400">{children}</li>;
}
