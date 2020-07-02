import React from "react";
import RadioButton from "../common/radioButton";
import "./WorkingHours.scss";
import "rc-time-picker/assets/index.css";
import { IWorkingHoursProps } from "./types";
import WorkingHoursDay from "../workingHoursDay";
import {
  monday,
  GLOBAL,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
} from "../../lib/store/workingHours";

const WorkingHours = (props: IWorkingHoursProps) => {
  const setIsFixed = (value: string) => {
    props.setIsFixed({ isFixed: "Fixed" === value });
  };
  const onSave = () => props.save(props.initState);
  const onRestore = () => props.restore();
  return (
    <div className="working-hours">
      <div className="working-hours__top">
        <h2 className="working-hours__top-label">Schedule</h2>
        <RadioButton
          className="working-hours__top-rb"
          name="schedule"
          label="Fixed"
          value="Fixed"
          checked={props.initState.isFixed}
          onChange={setIsFixed}
        />
        <RadioButton
          className="working-hours__top-rb"
          name="schedule"
          label="Flexible"
          value="Flexible"
          checked={!props.initState.isFixed}
          onChange={setIsFixed}
        />
      </div>
      <div className="working-hours__content">
        <WorkingHoursDay
          {...props.initState[GLOBAL]}
          updateHours={props.updateHours}
          setIsVisible={props.setIsVisible}
        />
        <WorkingHoursDay
          {...props.initState[monday]}
          updateHours={props.updateHours}
          setIsVisible={props.setIsVisible}
        />
        <WorkingHoursDay
          {...props.initState[tuesday]}
          updateHours={props.updateHours}
          setIsVisible={props.setIsVisible}
        />
        <WorkingHoursDay
          {...props.initState[wednesday]}
          updateHours={props.updateHours}
          setIsVisible={props.setIsVisible}
        />
        <WorkingHoursDay
          {...props.initState[thursday]}
          updateHours={props.updateHours}
          setIsVisible={props.setIsVisible}
        />
        <WorkingHoursDay
          {...props.initState[friday]}
          updateHours={props.updateHours}
          setIsVisible={props.setIsVisible}
        />
        <WorkingHoursDay
          {...props.initState[saturday]}
          updateHours={props.updateHours}
          setIsVisible={props.setIsVisible}
        />
        <WorkingHoursDay
          {...props.initState[sunday]}
          updateHours={props.updateHours}
          setIsVisible={props.setIsVisible}
        />
      </div>
      <div className="working-hours__actions">
        <button className="working-hours__action-save" onClick={onSave}>
          SAVE CHANGES
        </button>
        <button className="working-hours__action-cancel" onClick={onRestore}>
          Cancel
        </button>
        <span>to reset changes</span>
      </div>
    </div>
  );
};

export default WorkingHours;
