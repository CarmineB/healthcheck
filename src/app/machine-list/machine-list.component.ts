import { Component, OnInit } from '@angular/core';
import { MACHINES } from '../machine-list-data';
import { ChangeMachineService } from '../change-machine.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {

  constructor(private changeMachineService : ChangeMachineService) { }

  ngOnInit() {
  }

  machines = MACHINES;
  selectedMachine: string;

  onSelectionChange(machine:string){
    this.selectedMachine=machine;
    this.changeMachineService.setSelectedMachine(machine);
  }

}
