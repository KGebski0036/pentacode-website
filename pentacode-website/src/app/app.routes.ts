import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

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
		path: 'blog',
		component: BlogPageComponent
	},
	{
		path: 'contact',
		component: ContactPageComponent
	},
	{
		path: '**',
		redirectTo: 'home',
		pathMatch: 'full'
	}
];
