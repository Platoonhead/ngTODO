import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'my-app',
  templateUrl: './app/createTask/createTask.component.html',
  styleUrls: ['./app/createTask/createTask.component.css'],
  providers: [AppService]
})
export class createTaskComponent implements OnInit {

  id = -1;
  title: string;
  date: Date;
  des: string;
  pri: number;
  isSucess: Boolean = false;
  isUpdated: Boolean = false;
  btnName: string = "CreateTask";
  isSave: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private service: AppService) {
  }

  ngOnInit() {

    this.route.params.subscribe((paraEvent: any) => {
      if (paraEvent.id >= 0) {
        if (paraEvent) {
          this.id = paraEvent.id;
          let toEditItem = this.service.getItems().filter(x => x.id == this.id);
          this.title = toEditItem[0].title;
          this.date = toEditItem[0].date;
          this.des = toEditItem[0].description;
          this.pri = toEditItem[0].priority;
          this.btnName = "Save";
          this.isSave = true;
        }
      }
    });

  }

  createTask(form: any) {

    if (this.isSave == true) {

      if (this.service.updateItems(this.id, this.title, this.date, this.des, this.pri)) {

        this.isUpdated = true;

      }
      else {
        this.isUpdated = false;
      }

      this.btnName = "CreateTask";
      this.isSave = false;

    }
    else {
      this.id++;
      this.title = form.title;
      this.date = form.date;
      this.des = form.description;
      this.pri = form.priority;
      if (this.service.setItems(this.id, this.title, this.date, this.des, this.pri)) {
        this.isSucess = true;
      }
      else {
        this.isSucess = false;
      }

    }


    this.resetFields();
  }

  resetFields() {
    this.title = "";
    this.date = null;
    this.des = "";
    this.pri = null;
  }

}

