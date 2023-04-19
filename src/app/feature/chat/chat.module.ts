import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatPanelComponent } from './components/chat-panel/chat-panel.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';


@NgModule({
  declarations: [
    ChatPanelComponent,
    ChatWindowComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
