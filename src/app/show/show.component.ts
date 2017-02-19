import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {MyEvent} from "../event";
import {Router} from "@angular/router/";
@Component({
  selector: 'my-app',
  templateUrl: './app/show/show.component.html',
  styleUrls: ['./app/show/show.component.css'],
  providers: [AppService]
})
export class showComponent implements OnInit {

  storedData: MyEvent[];

  constructor(private service: AppService, private router: Router) {

    this.storedData = service.getItems();
  }


  ngOnInit() {

  }

  editTask(event: any) {
    this.router.navigate(['createTask/' + event.id]);
  }

  taskDone(event: any) {

    for (let i = 0; i < this.service.getItems().length; i++) {
      if (event.id == this.service.getItems()[i].id) {
        this.service.getItems()[i].id = -1;
      }
    }

  }

}
