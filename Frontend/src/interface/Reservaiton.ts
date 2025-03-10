import { Student } from "./Student";
import { Seat } from "./Seat";
import { Timeslot } from "./Timeslots";

export interface Reservations {
    reservation_id: number;
    student: Student;
    seat: Seat;
    timeslot: Timeslot;
    create_time: string;
}