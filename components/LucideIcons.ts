import type { FunctionComponent } from "preact";
import { CalendarDays as calendarDays, type LucideProps, MapPin as mapPin, Menu as menu, X as x } from "lucide-preact";

// lucide-preact's types target a newer preact than the 10.22 Fresh pins, so its icons fail JSX checks without this.
const typed = (icon: unknown) => icon as FunctionComponent<LucideProps>;

export const CalendarDays = typed(calendarDays);
export const MapPin = typed(mapPin);
export const Menu = typed(menu);
export const X = typed(x);
