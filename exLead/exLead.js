import { LightningElement, api } from 'lwc';

export default class exLead extends LightningElement {

    @api nome;
    @api empresa;
    @api status;
    @api elead;

}