import { Injectable } from "@angular/core";
import { DrivetrainModule } from "./models/DrivetrainModule";

@Injectable({
  providedIn: "root",
})
export class DrivetrainModuleService {
  constructor() {}

  get modules(): DrivetrainModule[] {
    return [
      {
        name: "Power Efficiency",
        overridesUser: false,
        className: "PowerEfficiencyModule",
        description:
          "The power efficiency module ramps up/down the drivetrain to avoid large current spikes which draw unnecessary power and could even lead to a brownout on the Roborio.",
        parameters: [
          {
            name: "secondsToReachFullSpeed",
            description: "Seconds to reach full speed",
            type: "number",
          },
          {
            name: "turningThreshold",
            description: "Turning threshold",
            type: "number",
          },
        ],
        icon: "assets/power_efficiency.svg",
      },
      {
        name: "Path Follower",
        overridesUser: true,
        className: "PathFollowerModule",
        description:
          "The path follower module allows your robot to follow paths consisting of straightaways and rotations. This is especially useful in autonomous. Note, the robot must have both a gyro and encoder(s) to use this module - this may change in the future.",
        parameters: [
          {
            name: "gyro",
            description: "Gyroscope",
            type: "Gyro",
          },
          {
            name: "encoders",
            description: "Encoders",
            type: "List<Encoder>",
          },
          {
            name: "forwardStrength",
            description: "Forward strength",
            type: "number",
          },
          {
            name: "turnStrength",
            description: "Turn strength",
            type: "number",
          },
        ],
        icon: "assets/path_follower.svg",
      },
      {
        name: "Anchor",
        overridesUser: true,
        className: "AnchorModule",
        description:
          "The anchor module attempts to keep the drivetrain in place. This can be used to stay put on a slanted platform or to defend a goal.",
        parameters: [
          {
            name: "leftEncoder",
            description: "Left encoder",
            type: "Encoder",
          },
          {
            name: "rightEncoder",
            description: "Right encoder",
            type: "Encoder",
          },
          {
            name: "strength",
            description: "Strength",
            type: "number",
          },
        ],
        icon: "assets/anchor.svg",
      },
      {
        name: "Precision",
        overridesUser: false,
        className: "PrecisionModule",
        description:
          "The precision module allows for finer movement at slower speeds. This is useful if you need to be precise when interacting with game pieces.",
        parameters: [
          {
            name: "strength",
            description: "Strength",
            type: "number",
          },
        ],
        icon: "assets/precision.svg",
      },
      {
        name: "Shifter",
        overridesUser: false,
        className: "ShifterModule",
        description:
          "The shifter module allows for easier gear shifting. Note: FRC team 5112 has not used shifters on our robots, so we were not able to test this on an actual bot.",
        parameters: [
          {
            name: "shifter",
            description: "Gear shifter",
            type: "GearShifter",
          },
          {
            name: "shiftStopTime",
            description: "Shift stop time",
            type: "number",
          },
        ],
        icon: "assets/shifter.svg",
      },
      {
        name: "Speed Constraint",
        overridesUser: false,
        className: "SpeedConstraintModule",
        description:
          "The speed constraint module limits the maximum speed of the robot. This is useful if your drivetrain is too fast and is hard for the drivers to control.",
        parameters: [
          {
            name: "maxSpeed",
            description: "Max speed",
            type: "number",
          },
          {
            name: "shouldScaleSpeeds",
            description: "Should scale speeds",
            type: "boolean",
          },
        ],
        icon: "assets/speed_constraint.svg",
      },
      {
        name: "Stability",
        overridesUser: false,
        className: "StabilityModule",
        description:
          "The stability module corrects the rotational drift of a drivetrain using a gyroscope. This can be used if you see that your robot should be driving straight but is going to the left or right. This module can also be used to drive straight over obstacles or when being hit by another robot.",
        parameters: [
          {
            name: "gyro",
            description: "Gyroscope",
            type: "Gyro",
          },
          {
            name: "strength",
            description: "Strength",
            type: "number",
          },
          {
            name: "settlingTime",
            description: "Settling time",
            type: "number",
          },
        ],
        icon: "assets/stability.svg",
      },
      {
        name: "Target Alignment",
        overridesUser: true,
        className: "TargetAlignmentModule",
        description:
          "The target alignment module allows your robot to align to a target using a camera. This module allows the robot to both aim at the target and drive to a specific distance away from the target. This is useful for shooting into a target or any game in which a vision target must be used. This module works best with the Limelight, other cameras may have too much latency but may still be usable.",
        parameters: [
          {
            name: "camera",
            description: "Camera",
            type: "ITargetingCamera",
          },
          {
            name: "aimStrength",
            description: "Aim strength",
            type: "number",
          },
          {
            name: "rangeStrength",
            description: "Range strength",
            type: "number",
          },
          {
            name: "shouldSeek",
            description: "Should seek",
            type: "boolean",
          },
        ],
        icon: "assets/target.svg",
      },
      {
        name: "Traction Control",
        overridesUser: false,
        className: "TractionControlModule",
        description:
          "The traction control module can be used to ensure both sides of the drivetrain spin at the same speed and maintain traction. This can be used if you notice your robot is slipping when accelerating or is having trouble getting a grip on the playing field",
        parameters: [
          {
            name: "leftEncoder",
            description: "Left encoder",
            type: "Encoder",
          },
          {
            name: "rightEncoder",
            description: "Right encoder",
            type: "Encoder",
          },
          {
            name: "strength",
            description: "Strength",
            type: "number",
          },
          {
            name: "slipThreshold",
            description: "Slip threshold",
            type: "number",
          },
        ],
        icon: "assets/traction.svg",
      },
      {
        name: "Velocity Control",
        overridesUser: false,
        className: "VelocityControlModule",
        description:
          "The velocity control module can be used to set the drivetrain motors to a set velocity rather than voltage or PWM.",
        parameters: [
          {
            name: "leftEncoder",
            description: "Left encoder",
            type: "Encoder",
          },
          {
            name: "rightEncoder",
            description: "Right encoder",
            type: "Encoder",
          },
          {
            name: "maxVelocity",
            description: "Max velocity",
            type: "number",
          },
          {
            name: "strength",
            description: "Strength",
            type: "number",
          },
        ],
        icon: "assets/speed_constraint.svg",
      },
      {
        name: "Voltage Control",
        overridesUser: false,
        className: "VoltageControlModule",
        description:
          "The voltage control module can be used to keep the drivetrain motors running at a consistent voltage even though the battery voltage of the robot might fluctuate. This is useful if you want the robot's movement to be more predictable and consistent throughout a match.",
        parameters: [
          {
            name: "maxDriveVoltage",
            description: "Max drive voltage",
            type: "number",
          },
        ],
        icon: "assets/voltage.svg",
      },
    ].sort((a, b) => a.name.localeCompare(b.name));
  }
}
