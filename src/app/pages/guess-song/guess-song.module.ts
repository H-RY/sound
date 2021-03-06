import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GuessSongRoutingModule } from './guess-song-routing.module';
import { AppGuessSongComponent } from './guess-song.component';
import { AppGuessSongHeaderComponent } from './guess-song-header/guess-song-header.component';
import { AppGuessSongListComponent } from './guess-song-list/guess-song-list.component';
import { AppSpecialSongComponent } from './guess-song-header/special-song/special-song.component';
import { AppGuessSongFooterComponent } from './guess-song-footer/guess-song-footer.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SvgModule } from '../../core/svg/svg.module';
import { NgDragDropModule } from 'ng-drag-drop';
import { AppProgressPointComponent } from './guess-song-footer/progress-point/progress-point.component';
import { AppGuessSongService } from './guess-song.service';
import { NzMessageModule, NzMessageService, NzPopconfirmModule } from 'ng-zorro-antd';
import { AppProgressComponent } from './guess-song-footer/progress/progress.component';
import { IndexFormatPipe } from 'src/app/core/common/pipe';

const pipes = [
  IndexFormatPipe
];

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    SvgModule,
    GuessSongRoutingModule,
    NgDragDropModule,
    NzMessageModule,
    NzPopconfirmModule
  ],
  declarations: [
    AppGuessSongComponent,
    AppGuessSongComponent,
    AppGuessSongHeaderComponent,
    AppGuessSongListComponent,
    AppSpecialSongComponent,
    AppGuessSongFooterComponent,
    AppProgressPointComponent,
    AppProgressComponent,
    ...pipes
  ],
  providers: [
    AppGuessSongService,
    NzMessageService
  ]
})
export class GuessSongModule { }
