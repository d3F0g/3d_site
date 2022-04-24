import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {
  public color = 'grey';
  private speed = 0.01;

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(mesh: THREE.Mesh) {
    mesh.rotation.x = mesh.rotation.y += this.speed;
  }

}
