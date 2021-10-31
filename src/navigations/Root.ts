import { createNavigationContainerRef } from '@react-navigation/native';

export type RootStackParamList = {
  HOME: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
