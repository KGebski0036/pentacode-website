import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-card2',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './card2.component.html',
	styleUrl: './card2.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card2Component { }
