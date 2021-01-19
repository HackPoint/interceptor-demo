import { Component, OnInit, VERSION } from "@angular/core";
import { SpinnerService } from "./shared/spinner.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  showSpinner = false;

  constructor(private readonly spinnerService: SpinnerService) {

  }
  
  ngOnInit(): void {
    this.spinnerService.getSpinnerObserver()
    .subscribe((status) => {
      this.showSpinner = status;
    });
  }
}
