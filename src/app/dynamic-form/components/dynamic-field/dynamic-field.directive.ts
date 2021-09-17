import { FormFileComponent } from './../form-file/form-file.component';
import { FormDateComponent } from './../form-date/form-date.component';
import { FormTextareaComponent } from './../form-textarea/form-textarea.component';
import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormTextboxComponent } from '../form-textbox/form-textbox.component';

//componentes para crear
const components: {[type: string]: Type<Field>} = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  textarea : FormTextareaComponent,
  date: FormDateComponent,
  file : FormFileComponent,
  textbox : FormTextboxComponent
};


/**
 * Cuando Angular crea un componente, si ese componente inyecta un ViewContainerRef,
 * crea un contenedor de vista para ese componente.
 *  Esto para que el componente pueda crear y
 *  manipular vistas anidadas dentro del nodo DOM raíz de ese componente.
 */

@Directive({
  selector: '[dynamicField]'
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
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
