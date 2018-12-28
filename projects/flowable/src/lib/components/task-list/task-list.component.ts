import { Component, OnDestroy, OnInit, Output } from '@angular/core';

import { Subscription} from 'rxjs';

import { TasksService } from '../../services/tasks/tasks.service';
import { TaskModel } from '../../models/task-list.model';

import { LoggerService } from 'utils';

@Component({
  selector: 'flow-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  public items: TaskModel[];
  public selectedItem: TaskModel;

  constructor(private tasksService: TasksService,
              private logger: LoggerService) {}

  public ngOnInit() {

    this.logger.info('TaskListComponent: ngOnInit()');

    this.subscribe();
  }

  public refresh() {

    this.logger.info('TaskListComponent: refresh()');

    this.unsubscribe();
    this.subscribe();
  }

  protected subscribe() {

    this.logger.info('TaskListComponent: subscribe()');

    let modelSubscription: Subscription = new Subscription();
    this.subscriptions.push(modelSubscription);

    modelSubscription = this.tasksService.getTasks().subscribe(model => {

      this.items = model.data;
      this.selectedItem = this.items[0];
    });

  }

  protected unsubscribe(): void {

    this.logger.info('TaskListComponent: unsubscribe()');

    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });

  }

  public onSelect(task: TaskModel) {

    this.logger.info('TaskListComponent: onSelect()');

    this.selectedItem = task;
  }

  public ngOnDestroy() {

    this.logger.info('TaskListComponent: ngOnDestroy()');
    this.unsubscribe();
  }
}
