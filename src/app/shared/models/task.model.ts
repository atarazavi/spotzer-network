export interface Task {
    id: string;
    name: string;
    description: string;
    status: 'available' | 'assigned' | 'completed';
    assignee?: string | null;
    amount: number;
    completionDate?: Date;
}
