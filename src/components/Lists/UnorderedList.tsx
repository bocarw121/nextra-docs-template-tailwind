import { PropsWithChildren } from 'react';

export function UnOrderedList({ children }: PropsWithChildren) {
  return <ul className="list-decimal pl-4 mt-8">{children}</ul>;
}
