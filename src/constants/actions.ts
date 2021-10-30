declare type ActionsTypes = 'REQUEST' | 'SUCCESS' | 'FAILURE';

const composeActionType = (shortActionName: string) => (e?: ActionsTypes) => {
  return e ? `${shortActionName}_${e}` : shortActionName;
};

export default {};
