import { Component, OnInit, Input } from '@angular/core';
import { ComponentTO } from '../model/componentTO';
import { ChangeMachineService } from '../change-machine.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  @Input() machineSelected:string;
  componentList: ComponentTO[];
  machineChanged: string;

  constructor(private changeMachineService:ChangeMachineService) { }


  ngOnInit() {
    this.changeMachineService.selectedMachine.subscribe(machineChoosen=>{
      this.updateComponentList(machineChoosen);
    });
  }


  private updateComponentList(machineChoosen: string) {
    if (machineChoosen == 'sm') {
      this.componentList = [{ name: "salesOrder", machine: "sm" }];
    }
    else if (machineChoosen == 'wh') {
      this.componentList = [{ name: "outboundFlow", machine: "wh" }];
    }
  }
}
