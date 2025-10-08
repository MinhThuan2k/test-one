export type StepKey =
  | "HOME"
  | "SELECT"
  | "CHECK"
  | "FORM"
  | "REVIEW"
  | "PAYMENT"
  | "CONFIRM";

export type VisaType = {
  id: string;
  title: string;
  durationDays: number;
  notes?: string;
};