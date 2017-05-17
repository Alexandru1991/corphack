import {Component, OnInit} from "@angular/core";
declare var $: any;

@Component(
  {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  }
)
export class AppComponent implements OnInit {

  title = 'app works!';

  ngOnInit(): void {

    if ($('.navbar').length > 0) {
      $(window).on(
        "scroll load resize",  ()=> {
          this.checkScroll();
        }
      );
    }


  }

  checkScroll() {
    //var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > 100) {
      $('.navbar').addClass("scrolled");
    } else {
      $('.navbar').removeClass("scrolled");
    }
  }


}
