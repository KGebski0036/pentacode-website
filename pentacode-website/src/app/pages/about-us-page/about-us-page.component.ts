import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationBarComponent } from "../../components/navigation-bar/navigation-bar.component";
import { AboutUsCardComponent } from "../../components/about-us-card/about-us-card.component";

@Component({
	selector: 'app-about-us-page',
	standalone: true,
	imports: [
    CommonModule,
    NavigationBarComponent,
    AboutUsCardComponent,
],
	templateUrl: './about-us-page.component.html',
	styleUrl: './about-us-page.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPageComponent { }
