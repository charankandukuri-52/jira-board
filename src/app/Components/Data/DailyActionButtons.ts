import './DailyTaskActionButtons.ts'

interface ActionButtons {
    title: string;
    description: string;
    images:string
}

export default class DailyTaskActionButtonsFunction {
    private dailyTaskActions: ActionButtons[];

    constructor(dailyTaskActions: ActionButtons[]) {
        this.dailyTaskActions = dailyTaskActions;
    }
    getTasks(): ActionButtons[] {
        return this.dailyTaskActions;
    }
}