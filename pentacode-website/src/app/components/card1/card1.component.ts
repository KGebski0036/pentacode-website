import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-card1',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './card1.component.html',
	styleUrl: './card1.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card1Component { }
