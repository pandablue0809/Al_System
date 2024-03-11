import React, { Suspense } from 'react';
import { Loading } from '../loading/Loading';

type ReturnType<T> = (props: T) => JSX.Element;

export const withLoading = <T extends object>(Component: React.ComponentType<T>): ReturnType<T> => {
  // Define the component inside the HOC
  const WithLoadingComponent = (props: T) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

  // Assign a display name to help with debugging
  WithLoadingComponent.displayName = `WithLoading(${Component.displayName || Component.name || 'Component'})`;

  return WithLoadingComponent;
};
