import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    loading = true
    errors = false
    router
    //authService: any;
    form: FormGroup;
    controls: any;

    constructor(private element: ElementRef , private authService : AuthService , private formBuilder: FormBuilder) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;

          //construyo el formulario
          this.buildForm();
    }

    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    }


    login(): void {
        this.loading = true;
        this.errors = false;

         this.authService.login(this.controls.email.value, this.controls.password.value)
           .subscribe((res: any) => {
              //Store the access token in the localstorage
             localStorage.setItem('access_token', res.access_token);
             this.loading = false;
             // Navigate to home page
             this.router.navigate(['/']);
           }, (err: any) => {
              //This error can be internal or invalid credentials
              //You need to customize this based on the error.status code
             this.loading = false;
             this.errors = true;
           });
      }



      private buildForm() {
        //construyo un grupo de formBuilder y accedo a sus nombres de FormControlName escrivos sus Validators requeridos
        this.form = this.formBuilder.group({
            email: [
                '',
                [
                    Validators.required,
                    Validators.email,
                    //Validators.pattern(this.fieldEmailPattern),
                ],
            ],
            password: [
                '',
                [
                    Validators.required,
                    Validators.maxLength(250),
                    //Validators.pattern(this.fieldNameSurnamePattern),
                ],
            ],

        });
    }


    get emailField() {
        return this.form.get('email');
    }

    get passworddField() {
        return this.form.get('password');
    }

    //validador de campos no validos genericos formControlName
    //touched si el campo a sido manipulado y invalido si el campo no es invalido
    fieldNoValid(field: string) {
        //retorno dependiendo el field verifico si es invalid o es touched
        return this.form.get(field)?.invalid && this.form.get(field)?.touched;
    }

    //validador de campos validos genericos formControlName
    //touched si el campo a sido manipulado y invalido si el campo no es invalido
    fieldValid(field: string) {
        //retorno dependiendo el field verifico si es valid o es touched
        return this.form.get(field)?.valid && this.form.get(field)?.touched;
    }

    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    ngOnDestroy(){
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
      body.classList.remove('off-canvas-sidebar');
    }
}
