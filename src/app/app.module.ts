import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {createTaskComponent} from "./createTask/createTask.component";
import {showComponent} from "./show/show.component";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  declarations: [createTaskComponent, showComponent, AppComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
