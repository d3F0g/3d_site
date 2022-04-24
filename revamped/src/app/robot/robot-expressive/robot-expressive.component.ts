import { Component, OnInit } from '@angular/core';
import { GridHelper, Material } from 'three';

@Component({
  selector: 'app-robot-expressive',
  templateUrl: './robot-expressive.component.html',
  styleUrls: ['./robot-expressive.component.scss'],
})
export class RobotExpressiveComponent {
  onGridHelperReady(helper: GridHelper) {
    const material = helper.material as Material;
    material.opacity = 0.2;
    material.transparent = true;
  }
  constructor() { }


}
