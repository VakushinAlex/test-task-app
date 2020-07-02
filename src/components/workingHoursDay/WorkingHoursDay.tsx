import React, { useState, useEffect } from "react";
import TimePicker from "rc-time-picker";
import moment from "moment";
import Slider from "../common/slider";
import Checkbox from "../common/checkbox";
import { IWorkingHoursDayProps } from "./types";
import { GLOBAL } from "../../lib/store/workingHours";
import "./WorkingHoursDay.scss";
import "rc-time-picker/assets/index.css";

const WorkingHoursDay = (props: IWorkingHoursDayProps) => {
  const [localState, setLocalState] = useState({
    from: props.from,
    to: props.to,
  });

  useEffect(() => {
    setLocalState({ from: props.from, to: props.to });
  }, [props.from, props.to]);

  const onChangeTimePicker = (type: "from" | "to") => (m: moment.Moment) => {
    const minutes = m.hour() * 60 + m.minute();
    let current = {
      from: localState.from,
      to: localState.to,
    };
    current[type] = minutes;
    if (type === "from" && current.from > current.to) {
      current.to = current.from;
    }
    if (type === "to" && current.to < current.from) {
      current.from = current.to;
    }
    setLocalState(current);
    updateHours(current);
  };

  const onUpdateSlider = (data: [string, string]) => {
    setLocalState({
      from: parseInt(data[0], 10),
      to: parseInt(data[1], 10),
    });
  };

  const onSetSlider = (data: [string, string]) => {
    updateHours({
      from: parseInt(data[0], 10),
      to: parseInt(data[1], 10),
    });
  };

  const updateHours = (newProps: { from: number; to: number }) => {
    props.updateHours({
      ...newProps,
      period: props.period,
      isActive: props.isActive,
      isVisible: props.isVisible,
      label: props.label,
    });
  };

  return (
    <div className="working-hours-day">
      <div className="working-hours-day__description">
        {props.period === GLOBAL ? (
          props.label
        ) : (
          <Checkbox
            checked={props.isVisible}
            onChange={(value: string) => {
              props.setIsVisible({
                period: props.period,
                isVisible: !props.isVisible,
              });
            }}
            label={props.label}
          />
        )}
      </div>
      {props.isVisible && (
        <div className="working-hours-day__content">
          <div className="working-hours-day__time-container">
            <TimePicker
              value={moment().startOf("day").minutes(localState.from)}
              showSecond={false}
              onChange={onChangeTimePicker("from")}
              className="working-hours-day__time-picker"
            />
            <span className="working-hours-day__time-separator">-</span>
            <TimePicker
              value={moment().startOf("day").minutes(localState.to)}
              onChange={onChangeTimePicker("to")}
              showSecond={false}
              className="working-hours-day__time-picker"
            />
          </div>
          <Slider
            from={props.from}
            to={props.to}
            isActive={props.isActive}
            onUpdate={onUpdateSlider}
            onSet={onSetSlider}
            className="working-hours-day__slider"
          />
        </div>
      )}
    </div>
  );
};

export default WorkingHoursDay;
