import { LightningElement /* api, track*/ } from 'lwc';
export default class Certificate extends LightningElement {
    verificationLink = 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=JJPJs8KX7INnYrPJlkYL1fIJw/BntQkzWnE/g7ms5FIEhjI4Qx1E3So0pr9XIc30';

    columns = [
        { label: 'Name', fieldName: 'Url', type: 'url', 
            typeAttributes: {
                label: {
                    fieldName: 'Name'
                },
            target:'_blank'
            },
            cellAttributes: {
                class: 'slds-text-heading_small'
            }
        },
        { label: 'Date', fieldName: 'Date', type: 'date', 
            cellAttributes:{
                alignment: 'right'
            },
            fixedWidth: 100
        },
    ];

    data = [
        {Name:'Salesforce Certified Administrator', Date: 'January 7, 2020', Url: this.verificationLink},
        {Name:'Salesforce Certified Platform App Builder', Date: 'July 29, 2019', Url: this.verificationLink},
        {Name:'Salesforce Certified Platform Developer I', Date: 'May 13, 2019', Url: this.verificationLink},
        {Name:'Salesforce Certified JavaScript Developer I', Date: 'September 18, 2022', Url: this.verificationLink},
        {Name:'Salesforce Certified Sales Cloud Consultant', Date: 'August 25, 2022', Url: this.verificationLink},
        {Name:'Salesforce Certified Tableau CRM and Einstein Discovery Consultant', Date: 'February 17, 2020', Url: this.verificationLink},
        {Name:'Salesforce Certified Advanced Administrator', Date: 'December 13, 2021', Url: this.verificationLink},

    ];

}