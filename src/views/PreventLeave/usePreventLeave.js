export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  }
  const enablePrevent = () => {
    window.onbeforeunload = listener;
  }
  const disablePrevent = () => {
    window.onbeforeunload = null;
  }

  return {
    enablePrevent,
    disablePrevent
  }
}