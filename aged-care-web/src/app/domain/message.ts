import { User } from './user';

export class Message {
    id: number;
    sender: User;
    receiver: User;
    subject: string;
    body: string;
    sendDate: Date;
    parentMessage: Message;
}