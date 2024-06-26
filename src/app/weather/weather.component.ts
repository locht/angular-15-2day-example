import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  isError = false;
  isLoading = false;
  cityName = 'Hanoi';
  temp = 38;
  inputName = '';
  constructor(
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.apiService.searchWeather(this.cityName).subscribe((res) => {
      this.temp = Math.round(res?.main?.temp);
    });
  }

  getWeather = () => {
    this.spinner.show();
    this.isLoading = true;
    this.apiService
      .searchWeather(this.inputName)
      .toPromise()
      .then((res) => {
        this.spinner.hide();
        this.isLoading = false;
        this.temp = Math.round(res?.main?.temp);
        this.cityName = this.inputName;
        this.isError = false;
      })
      .catch(() => {
        this.spinner.hide();
        this.isLoading = false;
        window.alert('lỗi không tìm thấy khu vực');
        this.isError = true;
      });
  };
}
