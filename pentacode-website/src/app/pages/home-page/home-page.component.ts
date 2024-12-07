import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationBarComponent } from "../../components/navigation-bar/navigation-bar.component";
import { HomeCardComponent } from "../../components/home-card/home-card.component";

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [
    CommonModule,
    NavigationBarComponent,
    HomeCardComponent
],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
