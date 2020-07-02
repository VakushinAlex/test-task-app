import React, { useRef, useEffect, useState } from "react";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import "./Slider.scss";
const wNumb = require("wnumb");

export interface ISliderProps {
  className?: string;
  from: number;
  to: number;
  isActive: boolean;
  onUpdate: Function;
  onSet: Function;
}

const Slider = (props: ISliderProps) => {
  const sliderEl = useRef<HTMLDivElement>(null);
  const [client, setClient] = useState<noUiSlider.noUiSlider>();
  useEffect(() => {
    if (sliderEl.current) {
      const client = noUiSlider.create(sliderEl.current, {
        start: [props.from, props.to],
        connect: true,
        range: {
          min: 0,
          max: 24 * 60 - 1,
        },
        format: wNumb({
          decimals: 0,
        }),
        step: 1,
      });
      setClient(client);
      client.on("update", (data) => {
        props.onUpdate(data);
      });
      client.on("set", (data) => {
        props.onSet(data);
      });
      return () => client.destroy();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (client) {
      const [from, to] = client.get() as [string, string];
      if (props.from === parseInt(from, 10) && props.to === parseInt(to, 10)) {
        return;
      }
      client.set([props.from, props.to]);
    }
  }, [client, props.from, props.to]);
  useEffect(() => {
    if (sliderEl.current) {
      if (!props.isActive) {
        sliderEl.current.setAttribute("disabled", "disabled");
        return;
      }
      sliderEl.current.removeAttribute("disabled");
    }
  }, [props.isActive]);
  return <div className={props.className} ref={sliderEl}></div>;
};

export default Slider;
