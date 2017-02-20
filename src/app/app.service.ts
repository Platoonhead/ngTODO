import {Injectable} from "@angular/core";
import {MyEvent} from "./event";

@Injectable()
export class AppService {

  static allevents: MyEvent[] = [];
  static assignID = -1;

  setItems(id: number, ti: string, da: Date, des: string, pr: number): boolean {
    let currentEvent: MyEvent = new MyEvent();
    currentEvent.id = id;
    currentEvent.title = ti;
    currentEvent.date = da;
    currentEvent.description = des;
    currentEvent.priority = pr;
    AppService.allevents.push(currentEvent);
    return true;
  }

  updateItems(id: number, ti: string, da: Date, des: string, pr: number): boolean {


    for (let i = 0; i < AppService.allevents.length; i++) {

      if (AppService.allevents[i].id == id) {
        AppService.allevents[i].title = ti;
        AppService.allevents[i].description = des;
        AppService.allevents[i].date = da;
        AppService.allevents[i].priority = pr;
      }
    }
    return true;

  }

  getItems() {

    return AppService.allevents;

  }

}
