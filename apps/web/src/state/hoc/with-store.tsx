import usePersistedStore from '@state/hooks/use-store';
import { TeamStore, useTeamStore } from '@state/team';
import { ComponentType } from 'react';

export interface WithTeamStoreProps {
  teamStore: TeamStore;
}

function withTeamStore<T extends WithTeamStoreProps>(Component: ComponentType<T>, LoadingComponent: React.ReactNode = null) {
  return function Wrapper(hocProps: Omit<T, 'teamStore'>) {
    const store = usePersistedStore(useTeamStore, (state) => state);

    // INFO: check if every slot is defined, because store gets defined before slots
    if (store && store.slots.every(Boolean)) {
      return <Component {...(hocProps as T)} teamStore={store} />;
    } else {
      return LoadingComponent;
    }
  };
}

export default withTeamStore;
