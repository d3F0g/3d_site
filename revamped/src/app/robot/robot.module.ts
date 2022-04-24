import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RobotComponent } from './robot/robot.component';
import { RobotExpressiveComponent } from './robot-expressive/robot-expressive.component';

import { NgtCoreModule, NgtMathPipeModule, NgtColorPipeModule, NgtFogPipeModule } from '@angular-three/core';
import { NgtGridHelperModule } from '@angular-three/core/helpers';
import {
  NgtAmbientLightModule,
  NgtDirectionalLightModule,
  NgtHemisphereLightModule,
} from '@angular-three/core/lights';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtMeshPhongMaterialModule } from '@angular-three/core/materials';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtPlaneGeometryModule } from '@angular-three/core/geometries'
import { NgtSobaStarsModule } from '@angular-three/soba/staging';

@NgModule({
  declarations: [
    RobotComponent,
    RobotExpressiveComponent
  ],
  imports: [
    CommonModule,
    NgtCoreModule,
    NgtHemisphereLightModule,
    NgtDirectionalLightModule,
    NgtSobaStarsModule,
    NgtMeshPhongMaterialModule,
    NgtGridHelperModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtMeshModule,
    NgtPlaneGeometryModule,
    NgtColorPipeModule,
    NgtFogPipeModule,
    NgtMathPipeModule
  ],
  exports: [
    RobotExpressiveComponent
  ]
})
export class RobotModule { }
