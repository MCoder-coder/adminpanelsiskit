import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/layouts/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/storage/local-storage.service';
import { TokenSessionStorageService } from 'src/app/layouts/services/storage/token-session-storage.service';



declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, OnDestroy {
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;



    //authService: any;
    form: FormGroup;
    controls: any;

    constructor(
        private element: ElementRef,
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router,
        private localStorageService: LocalStorageService,
        private tokenSessionService: TokenSessionStorageService
    ) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;

        //construyo el formulario
        this.buildForm();
    }

    ngOnInit() {


        //controla la animacion de incioo del login
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);

        // //me suscribo y verifico los cambios
        this.form.valueChanges.subscribe((value) => {
            console.log(value);
        });


        this.saveDataLogin()
    }



    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
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

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        body.classList.remove('off-canvas-sidebar');
    }


    login(): void {


        this.authService.login(
            this.form.get('email').value,
            this.form.get('password').value
        ).subscribe(res => {
            console.log("login component" ,res)
        })


        if (this.tokenSessionService.getToken()) {
            console.log(this.router.navigate(['dashboard']))
        }

        let email = this.form.get('email').value
        let password = this.form.get('password').value

        if(email == ""  && password == ""){
            console.log('los campos estan vacios')
        }else{
            this.localStorageService.setJsonValue('email',  email)
            this.localStorageService.setJsonValue('password' , password)
        }


        //localStorage.setItem('email' , email)
        //localStorage.setItem('password', password)

    }

    saveDataLogin(){

       let email = this.localStorageService.getJsonValue('email')
       let pass  = this.localStorageService.getJsonValue('password')

        if (email != null  && pass != null) {
            //contro del logeo automatico
            // setTimeout(() => {
            //     this.router.navigate(['dashboard']);
            // }, 2000);

            this.form.get('email').setValue(email)
            this.form.get('password').setValue(pass)
        }

       //console.log("email" , email)

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
}
