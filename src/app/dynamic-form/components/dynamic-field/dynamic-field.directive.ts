import { FormFileComponent } from './../form-file/form-file.component';
import { FormDateComponent } from './../form-date/form-date.component';
import { FormTextareaComponent } from './../form-textarea/form-textarea.component';
import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Input,
    OnChanges,
    OnInit,
    Type,
    ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormTextboxComponent } from '../form-textbox/form-textbox.component';

/**
 * CLASE CONTENEDOR
 * En primer lugar, se crea un "contenedor".
 * Se trata de comunicarse con la clase de componente real que definimos.
 *  Cuando se inicializa el contenedor, inicia una instancia de la clase de componente.
* También es responsable de la detección de cambios:
    se crean métodos en esta clase para cada @Input componente que tiene, y verifica su valor y lo actualiza si es necesario.
    El contenedor también se ocupa de desencadenar varios enlaces de
    ciclo de vida que se definen en la clase de componente original, como ngOnInity ngOnChanges.

 */

/**
 * Una vista de host es una vista delgada que se ocupa de crear nuestro componente para nosotros, en lugar de una vista de componente existente.
 * Crea el nodo DOM para el selector del componente, además de inicializar el contenedor y la vista principal
 */
//componentes para crear
const components: { [type: string]: Type<Field> } = {
    button: FormButtonComponent,
    input: FormInputComponent,
    select: FormSelectComponent,
    textarea: FormTextareaComponent,
    date: FormDateComponent,
    file: FormFileComponent,
    textbox: FormTextboxComponent,
};

/**
 * Cuando Angular crea un componente, si ese componente inyecta un ViewContainerRef,
 * crea un contenedor de vista para ese componente.
 *  Esto para que el componente pueda crear y
 *  manipular vistas anidadas dentro del nodo DOM raíz de ese componente.
 */

/**
 * Hemos configurado el selectorto [dynamicField]ya que lo vamos a utilizar como un atributo en lugar de un elemento.
 * La ventaja de esto es que podemos usarlo en una directiva Angular incorporada llamada ng-container.
 * Se ng-container mostrará invisible en el DOM, por lo tanto, cuando creamos dinámicamente nuestros componentes,
 *  solo los veremos en DOM en lugar de una carga de <dynamic-field></dynamic-field>elementos también.
 * Hemos agregado dos @Input()enlaces a nuestra directiva.
 * Estos son los config y group que vamos a pasar a nuestros componentes de campo dinámico.
 */
@Directive({
    selector: '[dynamicField]',
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
    //config del formulario
    @Input()
    config: FieldConfig;

    //el formulario es de tipo form group
    @Input()
    group: FormGroup;

    /**
     * Estamos configurando esto en una propiedad en la clase llamada component,
     * esto es para que podamos acceder al componente en otros métodos si es necesario.
     *  Por ejemplo, podríamos agregar ngOnChangespara mantener el componente dinámico sincronizado con configy grouptransmitido a DynamicFieldDirective
     */
    //el componente hacer referencian al modelo Field
    component: ComponentRef<Field>;
    /**
     * ComponentRef
     * Representa un componente creado por un ComponentFactory.
     * Proporciona acceso a la instancia del componente y los objetos
     * relacionados, y proporciona los medios para destruir la instancia.
     */

    constructor(
        private resolver: ComponentFactoryResolver,
        //Representa un contenedor donde se pueden adjuntar una o más vistas a un componente
        private container: ViewContainerRef
    ) {}

    //detecto los cambios dentro del componenete
    ngOnChanges() {
        if (this.component) {
            //instancio la
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    }

    ngOnInit() {
       // console.log('config', this.config);
        if (!components[this.config.type]) {
            const supportedTypes = Object.keys(components).join(', ');

            throw new Error(
                `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
            );
        }

        //creo los componentes a traves resolveComponentFactory
        /**
         * Un registro simple que se asigna Components a ComponentFactoryclases
         *  generadas que se pueden usar para crear instancias de componentes.
         * Use para obtener la fábrica para un tipo de componente dado,
         * luego use el create()
         * método de la fábrica para crear un componente de ese tipo.
         */
        const component = this.resolver.resolveComponentFactory<Field>(
            components[this.config.type]
        );
       //console.log('template componenet', component);
        this.component = this.container.createComponent(component);
        // console.log('this.component.instance.config' , this.component.instance.config)
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }

    /**
     * Estamos configurando esto en una propiedad en la clase llamada component,
     *  esto es para que podamos acceder al componente en otros métodos si es necesario.
     *  Por ejemplo, podríamos agregar ngOnChanges para mantener el componente dinámico sincronizado con config y group transmitido a
     * DynamicFieldDirective. Ahora podemos pasar el config y groupa nuestro componente creado dinámicamente.
     * Estas son solo propiedades en la clase de componente, y podemos acceder a la clase de componente inicializada a través de this.component.
     * instance
     */
}
