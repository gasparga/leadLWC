import { LightningElement, api } from 'lwc';

export default class Lead extends LightningElement {

    @api ide;
    @api nome;
    @api valor
    @api fase

}