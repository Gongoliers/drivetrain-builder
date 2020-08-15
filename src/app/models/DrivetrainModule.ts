export interface DrivetrainModule {
  name: string;
  description: string;
  overridesUser: boolean;
  icon?: string;
  className: string;
  parameters: DrivetrainModuleParameter[];
}

export interface DrivetrainModuleParameter {
  name: string;
  description?: string;
  type: string;
}
