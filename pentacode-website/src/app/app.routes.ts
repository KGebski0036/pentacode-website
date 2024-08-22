import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';

export const routes: Routes = [
	{
		path: 'home',
		component: HomePageComponent
	},
	{
		path: 'projects',
		component: ProjectPageComponent
	},
	{
		path: 'about-us',
		component: AboutUsPageComponent
	},
	{
		path: '**',
		redirectTo: 'home',
		pathMatch: 'full'
	}
];
