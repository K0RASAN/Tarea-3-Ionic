import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'sumadora',
    loadComponent: () => import('./sumadora/sumadora.page').then( m => m.SumadoraPage)
  },
  {
    path: 'traductor',
    loadComponent: () => import('./traductor/traductor.page').then( m => m.TraductorPage)
  },
  {
    path: 'tabla',
    loadComponent: () => import('./tabla/tabla.page').then( m => m.TablaPage)
  },
  {
    path: 'video',
    loadComponent: () => import('./video/video.page').then( m => m.VideoPage)
  },
];
