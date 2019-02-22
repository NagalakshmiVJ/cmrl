import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'submitted', loadChildren: './submitted/submitted.module#SubmittedPageModule' },
  { path: 'employee', loadChildren: './employee/employee.module#EmployeePageModule' },
  { path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsPageModule' },
  { path: 'schedule', loadChildren: './schedule/schedule.module#SchedulePageModule' },
  { path: 'preventive', loadChildren: './preventive/preventive.module#PreventivePageModule' },
  { path: 'breakdown', loadChildren: './breakdown/breakdown.module#BreakdownPageModule' },
  { path: 'equipment', loadChildren: './equipment/equipment.module#EquipmentPageModule' },
  { path: 'stores', loadChildren: './stores/stores.module#StoresPageModule' },
  { path: 'shift', loadChildren: './shift/shift.module#ShiftPageModule' },
  { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenancePageModule' },
  { path: 'knowledge', loadChildren: './knowledge/knowledge.module#KnowledgePageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
