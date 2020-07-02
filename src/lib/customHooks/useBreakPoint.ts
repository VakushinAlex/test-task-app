import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pointSelector, updatePointAction } from "../store/breakpoint";
import throttle from "lodash.throttle";
import { RootState } from "../store";
import { getDeviceConfig } from "../store/breakpoint/helper";

const useBreakpoint = () => {
  const brkPnt = useSelector((state: RootState) => pointSelector(state));
  const dispatch = useDispatch();
  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      dispatch(
        updatePointAction({ point: getDeviceConfig(window.innerWidth) })
      );
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => {
      return window.removeEventListener("resize", calcInnerWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return brkPnt;
};
export default useBreakpoint;
