import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-navigation-bar',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './navigation-bar.component.html',
	styleUrl: './navigation-bar.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent { }
