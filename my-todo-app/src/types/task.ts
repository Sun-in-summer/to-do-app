import  { Dayjs } from 'dayjs';

export type TaskType = {
    id: number;
    text: string;
    completed: boolean;
    date: Dayjs;
}

